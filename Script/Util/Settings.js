var Util_Settings = 
{
    "displayPoints": Config.settings.displayPoints,
    "displayRegionNumberMarkers": Config.settings.displayRegionNumberMarkers,
    setDisplayPoints: function(flag)
    {
        this.displayPoints = flag;
    },
    setDisplayRegionNumberMarkers: function(flag)
    {
        this.displayRegionNumberMarkers = flag;
    },
    save: function()
    {
        Util_Locale.setName(document.getElementById("settings_language").options[document.getElementById("settings_language").selectedIndex].value);
        Util_Settings.setDisplayPoints(document.getElementById("settings_points").checked);
        Util_Settings.setDisplayRegionNumberMarkers(document.getElementById("settings_numbers").checked);

        if (App.getMapKind() === "r")
        {
            var region = App.getPolygonList().getFirst("visible", true);
            google.maps.event.trigger(region.getHandle(), "click");
        }
        else if ((App.getMapKind() === "s" || Util_Settings.displayRegionNumberMarkers) && App.areRegions())
        {
            Util_Regions.load();
        }
        else if (App.getMapKind() === "m")
        {
            Util_Map.load();
        }
    }
};