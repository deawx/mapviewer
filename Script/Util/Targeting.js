var Util_Targeting =
{
    setEnabled: function(flag)
    {
        this.enabled = flag;
    },
    getEnabled: function()
    {
        return this.enabled;
    },
    enable: function()
    {
        Util_Targeting.setEnabled(true);
        
        var polygons = App.getPolygonList();
        for (var i = 0; i < polygons["list"].length; i++)
        {
            google.maps.event.clearListeners(polygons["list"][i].getHandle(), "click");
            google.maps.event.addListener(polygons["list"][i].getHandle(), "click", function(event) 
            {
                Util_Targeting.target(event);
            });
        }

        google.maps.event.addListener(App.getMap(), "click", function(event) 
        {
            Util_Targeting.target(event);
        });
    },
    disable: function()
    {
        var load = function(region)
        {
            Util_Region.load(region.getNumber());
        };
        
        Util_Targeting.setEnabled(false);
        
        var polygons = App.getPolygonList();
        for (var i = 0; i < polygons["list"].length; i++)
        {
            google.maps.event.clearListeners(polygons["list"][i].getHandle(), "click");
        }
        
        polygons = App.getPolygonList().getRange("kind", "region");
        
        for (var i = 0; i < polygons["list"].length; i++)
        {
            polygons["list"][i].onClick(load);
        }

        google.maps.event.clearListeners(App.getMap(), "click");
        
        if (Util_Targeting.marker)
        {
            Util_Targeting.marker.setMap(null);
        }
        
        if (Util_Targeting.infobox)
        {
            Util_Targeting.infobox.close();
        }
    },
    target: function(event)
    {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({'latLng': event.latLng}, function(results, status)
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

                if (Util_Targeting.marker)
                {
                    Util_Targeting.marker.setMap(null);
                }

                Util_Targeting.marker = new google.maps.Marker
                ({
                    map: App.getMap(),
                    position: coordinates
                });
                
                if (Util_Targeting.infobox)
                {
                    Util_Targeting.infobox.close();
                }

                Util_Targeting.infobox = new InfoBox
                ({
                    content: message,
                    boxClass: 'message',
                    position: coordinates,
                    pixelOffset: new google.maps.Size(-90, 10)
                });

                google.maps.event.addDomListener(Util_Targeting.marker, 'click', function()
                {
                    Util_Targeting.infobox.open(App.getMap());
                });
                
                App.getMap().setZoom(App.getMap().getZoom());

                Util_Targeting.infobox.open(App.getMap());
            }
            else
            {
                alert(Util_Locale._("Geocode not successful") + ': ' + status);
            }
        }); 
    },
    keepEnabled: function()
    {
        Util_Targeting.enable();
    }
};