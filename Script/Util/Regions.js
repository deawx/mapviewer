var Util_Regions = 
{
    setRegions: function(regions)
    {
        this.regions = regions;
    },
    getRegions: function()
    {
        return this.regions;
    },
    load: function()
    {
        //hide all
        App.hidePlacemarks();

        //set app kind
        App.setMapKind("s");
        
        //initializing map
        this.regions = App.getPolygonList().getRange("kind", "region");
        
        //show polygons of kind map
        this.regions.showAll();
        
        //set title
        Util.setTitleName(this.getFullName());
        
        //region number markers
        if (Util_Settings.displayRegionNumberMarkers)
        {
            App.getMarkerList().showRange("type", "number");
        }
        
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
        Util.unhighlight("m");
        Util.unhighlight("r");
        Util.highlight("mr");
    },
    getFullName: function()
    {
        return Util_Map.getFullName();
    },
    adjust: function()
    {
        Util_Map.adjust();
    }
};