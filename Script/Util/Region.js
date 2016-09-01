var Util_Region = 
{
    setRegion: function(region)
    {
        this.region = region;
    },
    getRegion: function()
    {
        return this.region;
    },
    load: function(number)
    {
        //remove all
        App.hidePlacemarks();

        //set app kind
        App.setMapKind("r");
        
        //initializing map
        this.region = App.getPolygonList().getRange("kind", "region").getFirst("number", number);
        
        //show polygons of kind map
        this.region.show();
        
        //adjust center and zoom
        this.adjust();
        
        //set title
        Util.setTitleName(this.getFullName());
        
        //region number markers
        if (Util_Settings.displayRegionNumberMarkers)
        {
            App.getMarkerList().getRange("type", "number").showRange("regionNumber", number);
        }
        
        //point markers
        if (Util_Settings.displayPoints)
        {
            App.getMarkerList().getRange("type", "point").showRange("regionNumber", number);
        }

        //targeting
        if (Util_Targeting.enabled)
        {
            Util_Targeting.keepEnabled();
        }
    },
    highlightControl: function()
    {
        Util.unhighlight("m");
        Util.unhighlight("mr");
        Util.highlight("r");
    },
    getFullName: function()
    {
        return "#" + Util.pad(this.region.getNumber(), 2, "0") + " " + this.region.getName();
    },
    adjust: function()
    {
        var region = this.region || App.getPolygonList().getFirst("kind", "region");
        var center = region.getCenter();
        var rectangle = region.getRectangle();
        App.getMap().setCenter(new google.maps.LatLng(center[0],center[1]));
        App.getMap().fitBounds(new google.maps.LatLngBounds(new google.maps.LatLng(rectangle[0][0], rectangle[0][1]), new google.maps.LatLng(rectangle[1][0], rectangle[1][1])));
    }
};