var app = require('../modules/app');
var googleapi = require('../modules/googleApi');
var barcodeScanner = require('../modules/barcodeScanner');
var render = require('../modules/render');

app.initialize(googleapi, render, barcodeScanner);
