/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var app = __webpack_require__(1);
	var googleapi = __webpack_require__(2);
	var barcodeScanner = __webpack_require__(3);
	var render = __webpack_require__(4);

	app.initialize(googleapi, render, barcodeScanner);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {

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
	        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
	        document.getElementById('search').addEventListener('click', this.search.bind(this), false);
	        document.getElementById('scan').addEventListener('click', this.scan.bind(this), false);

	    },

	    onDeviceReady: function() {
	        this.receivedEvent();
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



/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {

	    scan: function (callback, render) {
	        cordova.plugins.barcodeScanner.scan(
	            function (result) {
	                if(!result.cancelled) {
	                    callback(result.text, render);
	                }
	            },
	            function (error) {
	                alert("Scanning failed: " + error);
	            },
	            {
	                'preferBackCamera': true,
	                'showFlipCameraButton': true,
	                'prompt': 'Place a barcode inside the scan area',
	                'formats': 'EAN_13',
	                'orientation': 'landscape'
	            }
	        );
	    }

	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {

	    renderResult: function(result) {
	        var resultEl = document.getElementById('search-result');
	        resultEl.innerHTML = '<strong>wait</strong>';
	        if (parseInt(result.totalItems) === 1) {
	            var html = '<strong>found ' + result.totalItems + ' items</strong>';
	            html += '\
	            <div>\
	                <h3>' + result.items[0].volumeInfo.title + '</h3>\
	                \
	            </div>';
	            resultEl.innerHTML = html;
	        } else {
	            resultEl.innerHTML = '<strong>found 0 items</strong>';
	        }
	    }

	};


/***/ }
/******/ ]);