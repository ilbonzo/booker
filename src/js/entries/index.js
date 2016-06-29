var app = require('../modules/app');
var googleBooksApi = require('../modules/googleBooksApi');
var barcodeScanner = require('../modules/barcodeScanner');
var render = require('../modules/render');

app.initialize(googleBooksApi, render, barcodeScanner);
