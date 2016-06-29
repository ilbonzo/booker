var geolocation = require('./geolocation');

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
        document.getElementById('scan').addEventListener('click', this.scan.bind(this), false);
        document.getElementById('get-places').addEventListener('click', this.getPlaces.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent();
    },

    receivedEvent: function() {
        console.log('Received Event: deviceready');
    },

    search: function () {
        var isbn = document.getElementById('isbn').value;
        this.googleBooksApi.searchByIsbn(isbn, this.render.renderResult);
    },

    scan: function () {
        this.barcodeScanner.scan(this.googleBooksApi.searchByIsbn, this.render.renderResult);
    },

    getPlaces: function () {
        geolocation.location();
    }
};

