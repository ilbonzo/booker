
var app = {

    googleapi: null,

    // Application Constructor
    initialize: function(googleapi) {
        this.bindEvents();
        this.googleapi = googleapi;
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('search').addEventListener('click', this.search, false);
    },

    onDeviceReady: function() {
        app.receivedEvent();
    },

    receivedEvent: function() {
        console.log('Received Event: deviceready');
    },

    search: function () {
        var isbn = document.getElementById('isbn').value;
        googleapi.searchByIsbn(isbn, render.renderResult);
    }
};

app.initialize(googleapi);
