
var app = {

    googleapi: null,

    render: null,

    // Application Constructor
    initialize: function(googleapi, render) {
        this.bindEvents();
        this.googleapi = googleapi;
        this.render = render;
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('search').addEventListener('click', this.search.bind(this), false);
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
    }
};

app.initialize(googleapi, render);
