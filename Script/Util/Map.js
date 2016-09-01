var Util_Map = 
{
    setMap: function(map)
    {
        this.map = map;
    },
    getMap: function()
    {
        return this.map;
    },
    load: function()
    {
        //hide all
        App.hidePlacemarks();

        //set app kind
        App.setMapKind("m");
        
        //initializing map
        this.map = App.getPolygonList().getFirst("kind", "map");
        
        //show polygons of kind map
        this.map.show();
        
        //set title
        Util.setTitleName(this.getFullName());
        
        //point markers
        if (Util_Settings.displayPoints)
        {
            App.getMarkerList().showRange("type", "point");
        }

        //targeting
        if (Util_Targeting.enabled)
        {
            Util_Targeting.keepEnabled();
        }
    },
    highlightControl: function()
    {
        Util.unhighlight("mr");
        Util.unhighlight("r");
        Util.highlight("m");
    },
    getFullName: function()
    {
        var map = this.map || App.getPolygonList().getFirst("kind", "map");
        return "#" + Util.pad(map.getNumber(), 3, "0") + " " + map.getName();
    },
    adjust: function()
    {
        var map = this.map || App.getPolygonList().getFirst("kind", "map");
        var center = map.getCenter();
        var rectangle = map.getRectangle();
        App.getMap().setCenter(new google.maps.LatLng(center[0],center[1]));
        App.getMap().fitBounds(new google.maps.LatLngBounds(new google.maps.LatLng(rectangle[0][0], rectangle[0][1]), new google.maps.LatLng(rectangle[1][0], rectangle[1][1])));
    }
};