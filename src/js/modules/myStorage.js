var localforage = require('localforage');

module.exports = {

    save: function (data) {
        dataObj = {
            'latitude': data.coords.latitude,
            'longitude': data.coords.longitude
        };

        localforage.setItem(data.timestamp.toString(), JSON.stringify(dataObj)).then(function () {
            return localforage.getItem(data.timestamp.toString());
        }).then(function (value) {
            console.log(value);
        }).catch(function (err) {
            console.log(err);
        });
    }
};
