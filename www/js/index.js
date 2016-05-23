var googleapi = {

    searchByIsbn: function(isbn) {         
        var request = new XMLHttpRequest();
        request.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                var resp = request.responseText;
                console.log(resp);
            } else {
                // We reached our target server, but it returned an error
                console.log('error 1');
            }
        };

        request.onerror = function() {
            console.log('error 2');
            // There was a connection error of some sort
        };

        request.send();        
    }
};

var app = {
    
    googleapi: null,
    
    // Application Constructor
    initialize: function(googleapi) {
        this.bindEvents();
        this.googleapi = googleapi;
    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById("search").addEventListener("click", this.search, false);
    },
    
    onDeviceReady: function() {
        app.receivedEvent();
    },
    
    receivedEvent: function() {        
        console.log('Received Event: deviceready');               
    },
        
    search: function () {
        var isbn = document.getElementById('isbn').value; 
        googleapi.searchByIsbn(isbn);
    }
};

app.initialize(googleapi);