
var app = {

    googleapi: null,

    render: null,

    barcodeScanner: null,

    // Application Constructor
    initialize: function(googleapi, render, barcodeScanner) {
        this.bindEvents();
        this.googleapi = googleapi;
        this.render = render;
        this.barcodeScanner = barcodeScanner;
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('search').addEventListener('click', this.search.bind(this), false);
        document.getElementById('scan').addEventListener('click', this.scan.bind(this), false);

    },

    onDeviceReady: function() {
        app.receivedEvent();
    },

    receivedEvent: function() {
        console.log('Received Event: deviceready');
    },

    search: function () {
        var isbn = document.getElementById('isbn').value;
        this.googleapi.searchByIsbn(isbn, this.render.renderResult);
    },

    scan: function () {
        this.barcodeScanner.scan(this.googleapi.searchByIsbn, this.render.renderResult);
    }
};

app.initialize(googleapi, render, barcodeScanner);
