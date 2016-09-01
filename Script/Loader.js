head.load("https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCoqPfC7_K5LztXPRDTtUE6Ed4GUt-K8ME&sensor=true&region=IE&callback=load");

var resources = 
[
    "./Config/default.js",
    "./Libraries/infobox.js",
    "./Libraries/inpolygon.js",
    "./Libraries/markerwithlabel.js",
    "./Script/Locale/messages.js",
    "./Style/CSS/reset.css",
    "./Style/CSS/interface.css",
    "./Style/GoogleMaps/styles.js"
];

var model = 
[
    "./Script/Model/Marker.js",
    "./Script/Model/MarkerList.js",
    "./Script/Model/Polygon.js",
    "./Script/Model/PolygonList.js"
];

var util = 
[
    "./Script/Util/GUI/Button.js",
    "./Script/Util/GUI/Form.js",
    "./Script/Util/GUI/Panel.js",
    "./Script/Util/Resources/Image.js",
    "./Script/Util/Locale.js",
    "./Script/Util/Map.js",
    "./Script/Util/Region.js",
    "./Script/Util/Regions.js",
    "./Script/Util/Request.js",
    "./Script/Util/Screen.js",
    "./Script/Util/Searching.js",
    "./Script/Util/Settings.js",
    "./Script/Util/Targeting.js",
    "./Script/Util/Util.js"
];

var view =
[
    "./Script/View/Information.js",
    "./Script/View/Panel.js",
    "./Script/View/Searching.js",
    "./Script/View/Settings.js",
    "./Script/View/Targeting.js"
];

var application = "./Script/Application.js";

function load()
{
    head.load(resources, function()
    {
        head.load(model, function()
        {
            head.load(util, function()
            {
                head.load(view, function()
                {
                    head.load(application, function()
                    {
                        App.initialize();
                    }); 
                });
            });
        });
    });
}