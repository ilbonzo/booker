var instantClick = require('instantclick2');
var geolocation = require('./geolocation');
var spinner = require('./spinner');

module.exports = {

    googleBooksApi: null,

    render: null,

    barcodeScanner: null,

    // Application Constructor
    initialize: function(googleBooksApi, render, barcodeScanner) {
        this.bindEvents();
        this.googleBooksApi = googleBooksApi;
        this.render = render;
        this.barcodeScanner = barcodeScanner;
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById('search').addEventListener('click', this.search.bind(this), false);

        var scanButtons = document.querySelectorAll('[data-action="scan"]');
        for (var i = 0; i < scanButtons.length; i++) {
            var button = scanButtons[i];
            button.addEventListener('click', this.scan.bind(this), false);
        }

        var getPlaceButtons = document.querySelectorAll('[data-action="get-places"]');
        for (var i = 0; i < getPlaceButtons.length; i++) {
            var button = getPlaceButtons[i];
            button.addEventListener('click', this.getPlaces.bind(this), false);
        }
    },

    onDeviceReady: function() {
        this.receivedEvent();
    },

    receivedEvent: function() {
        console.log('Received Event: deviceready');
        instantClick.init({
            preloadingMode: 50, //Mouseover duration before preload is triggered
            preloadCacheTimeLimit: 30000 //How long to cache preloaded pages
        });
    },

    search: function (event) {
        event.preventDefault();

        var container = document.getElementById('search-result');
        spinner.spin(container);

        var isbn = document.getElementById('isbn').value;
        this.googleBooksApi.searchByIsbn(isbn, this.render.renderResult);
    },

    scan: function (event) {
        event.preventDefault();

        var container = document.getElementById('search-result');
        spinner.spin(container);

        this.barcodeScanner.scan(this.googleBooksApi.searchByIsbn, this.render.renderResult);
    },

    getPlaces: function (event) {
        event.preventDefault();

        var container = document.getElementById('map');
        spinner.spin(container);

        geolocation.location();
    }
};

