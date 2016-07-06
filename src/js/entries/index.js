var bootstrapCss = require('bootstrap/dist/css/bootstrap.css');
var css = require('../../css/index.css');

var jQuery = require('jquery');
var bootstrap = require('bootstrap');
var app = require('../modules/app');
var googleBooksApi = require('../modules/googleBooksApi');
var barcodeScanner = require('../modules/barcodeScanner');
var render = require('../modules/render');

app.initialize(googleBooksApi, render, barcodeScanner);
