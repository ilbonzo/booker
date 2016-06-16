var barcodeScanner = {

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
