module.exports = {

    searchByIsbn: function(isbn, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                var resp = request.responseText;
                callback(JSON.parse(resp));
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
