var googlePlaceApi = require('./googlePlaceApi');
var render = require('./render');

module.exports = {

    location: function () {
        var that = this;
        that.getLocation();
    },

    getLocation: function() {
        var that = this;
        var options = {
            maximumAge: 3000,
            timeout: 5000,
            enableHighAccuracy: true
        };
        navigator.geolocation.getCurrentPosition(that.getLocationSuccess.bind(this), that.getLocationError.bind(this), options);
    },

    getLocationSuccess: function (result) {
        googlePlaceApi.init(result.coords);
    },

    getLocationError: function (err) {
        console.log('geolocation error');
        console.log(err);
    }
};
