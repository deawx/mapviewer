var Util_Searching = 
{
    "search": function(address)
    {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({'address': address}, function(results, status)
        {
            if (status === google.maps.GeocoderStatus.OK)
            {
                var coordinates = results[0].geometry.location;
                var coordinatesText = coordinates.toString();
                coordinatesText = coordinatesText.replace('(', '');
                coordinatesText = coordinatesText.replace(')', '');
                coordinatesText = coordinatesText.replace(',', '<br>');
                var message = '<b>' + Util.capitalize(Util_Locale._("address")) + ':</b><br> ' + results[0].formatted_address + '<br><br>' + '<b>' + Util.capitalize(Util_Locale._("coordinates")) + ':</b><br>' + coordinatesText;

                App.getMap().setCenter(results[0].geometry.location);

                var marker = new google.maps.Marker
                ({
                    map: App.getMap(),
                    position: coordinates
                });

                var infoBox = new InfoBox
                ({
                    content: message,
                    boxClass: 'message',
                    position: coordinates,
                    pixelOffset: new google.maps.Size(-90, 10)
                });

                google.maps.event.addDomListener(marker, 'click', function()
                {
                    infoBox.open(App.getMap());
                });

                App.getMap().setZoom(17);
                infoBox.open(App.getMap());
            }
            else
            {
                alert(Util_Locale._("Geocode not successful") + ': ' + status);
            }
        }); 
    }
};