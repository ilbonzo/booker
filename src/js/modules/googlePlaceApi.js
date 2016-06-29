module.exports = {

    map: null,

    init: function (coords) {
        var that = this;
        var pyrmont = new google.maps.LatLng(coords.latitude, coords.longitude);

        that.map = new google.maps.Map(document.getElementById('map'), {
            center: pyrmont,
            zoom: 15
        });

        var request = {
            location: pyrmont,
            radius: '500',
            types: ['school']
        };

        var service = new google.maps.places.PlacesService(that.map);
        service.nearbySearch(request, that.placeServiceSuccess.bind(this));
    },

    placeServiceSuccess: function (results, status) {
        var that = this;
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                that.createMarker(results[i]);
            }
        }
    },

    createMarker: function (place) {
        var that = this;
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: that.map,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
            var infowindow = new google.maps.InfoWindow();
            infowindow.setContent(place.name);
            infowindow.open(that.map, this);
        });
    }
};
