var App =
{
    initialize: function()
    {
        Util_Locale.getBrowserLocale();
        App.setMap(new google.maps.Map(document.getElementById("map"),{mapTypeId: google.maps.MapTypeId.ROADMAP, disableDefaultUI: true}));
        App.setMapKind(Util.getKindFromURL());
        App.setAndroidVersion(parseInt(Util.getAndroidVersion()));
        App.readJSON();
    },
    createGUI: function()
    {
        Util_Resource_Image.load();
        Util_GUI_Button.initialize();
        Util_GUI_Button.createButton("control", "menu", "menu-closed");
        
        if (App.getAndroidVersion() < 4)
        {
            Util_GUI_Button.createButton("control", "plus", "plus");
            Util_GUI_Button.createButton("control", "minus", "minus");
        }
        
        Util_GUI_Button.createButton("panel", "mapa", "map");
        Util_GUI_Button.createButton("panel", "globe", "globe");
        Util_GUI_Button.createButton("panel", "m", "m");
        Util_GUI_Button.createButton("panel", "mr", "mr");
        Util_GUI_Button.createButton("panel", "r", "r");
        Util_GUI_Button.createButton("panel", "info", "i");
        Util_GUI_Button.createButton("panel", "search", "magnifier");
        Util_GUI_Button.createButton("panel", "targeting", "viewfinder");
        Util_GUI_Button.createButton("panel", "settings", "gears");
    },
    addEventListeners: function()
    {        
        google.maps.event.addDomListener(App.getMap(), "zoom_changed", function()
        {
            if (true)
            {
                App.getMarkerList().getRange("type", "point").updateSize(App.getMap().getZoom());
            }
            
            if (true)
            {
                App.getMarkerList().getRange("type", "number").updateSize(App.getMap().getZoom());
            }
        });
        
        google.maps.event.addDomListener(App.buttons.control.menu, 'click', function()
        {
            if (!Util_GUI_Panel.isVisible())
            {
                Util_GUI_Panel.show();
            }
            else
            {
                Util_GUI_Panel.hide();
            }
        });
        
        if (App.getAndroidVersion() < 4)
        {
            google.maps.event.addDomListener(App.buttons.control.plus, 'click', function()
            {
                App.getMap().setZoom(App.getMap().getZoom() + 1);
            });
            
            google.maps.event.addDomListener(App.buttons.control.minus, 'click', function()
            {
                App.getMap().setZoom(App.getMap().getZoom() - 1);
            });
        }
    },
    readJSON: function()
    {
        Util_Request.send(Util.getJsonPath(Util.getJsonNameFromURL()), App.construct);
    },
    construct: function(response)
    {
        App.setResponse(response);
        App.setRegionsFlag((response.regions.length === 0) ? false : true);
        App.createGUI();
        App.addEventListeners();
        google.maps.event.addListenerOnce(App.getMap(), 'idle', function()
        {
            App.load();
            App.setResponse(null);
        });
    },
    load: function()
    {
        var paths = [];
        App.setPolygonList(new Model_PolygonList());
        App.setMarkerList(new Model_MarkerList());
        
        //populating collection with all polygons
        //map
        for (var i = 0; i < App.getResponse().polygon.length; i++)
        {
            paths.push(new google.maps.LatLng(App.getResponse().polygon[i][0],App.getResponse().polygon[i][1]));
        }
        
        var polygon = new Model_Polygon
        ({
            "center": App.getResponse().center,
            "gps": App.getResponse().gps,
            "name": App.getResponse().name,
            "number": App.getResponse().number,
            "points": App.getResponse().points,
            "paths": paths,
            "rectangle": App.getResponse().rectangle,
            "type": App.getResponse().type,
            "kind": "map"
        });
        
        App.getPolygonList().add(polygon);
        
        if (App.areRegions())
        {
            //regions and region number markers
            var load = function(region)
            {
                Util_Region.highlightControl();
                Util_Region.load(region.getNumber());
            };

            for (var i = 0; i < App.getResponse().regions.length; i++)
            {
                paths = [];

                for (var j = 0; j < App.getResponse().regions[i].polygon.length; j++)
                {
                    paths.push(new google.maps.LatLng(App.getResponse().regions[i].polygon[j][0],App.getResponse().regions[i].polygon[j][1]));
                }

                //region
                var polygon = new Model_Polygon
                ({
                    "center": App.getResponse().regions[i].center,
                    "gps": App.getResponse().regions[i].gps,
                    "name": App.getResponse().regions[i].name,
                    "number": App.getResponse().regions[i].number,
                    "paths": paths,
                    "rectangle": App.getResponse().regions[i].rectangle,
                    "type": App.getResponse().regions[i].type,
                    "kind": "region"
                });

                polygon.onClick(load);

                App.getPolygonList().add(polygon);

                //region number marker
                var numberClick = function(marker)
                {
                    Util_Region.highlightControl();
                    Util_Region.load(marker.getRegionNumber());
                };

                var latitude, longitude;
                if (polygon.getHandle().containsLatLng(new google.maps.LatLng(polygon.getCenter()[0],polygon.getCenter()[1])))
                {
                    latitude = polygon.getCenter()[0];
                    longitude = polygon.getCenter()[1];
                }
                else
                {
                    latitude = polygon.getGPS()[0];
                    longitude = polygon.getGPS()[1];
                }

                //region number
                var marker = new Model_Marker
                ({
                    "latitude": latitude,
                    "longitude": longitude,
                    "iconName": "null",
                    "content": Util.pad(polygon.getNumber(), 2, "0"),
                    "type":"number",
                    "size": 21,
                    "regionNumber": polygon.getNumber()
                });

                marker.onClick(numberClick);

                App.getMarkerList().add(marker);
            }
        }
        
        //points
        var goToMarker = function(marker)
        {
            var coordinates = new google.maps.LatLng(marker.getLatitude(), marker.getLongitude());
            App.getMap().setZoom(20);
            App.getMap().setCenter(coordinates);
        };
        
        for (var i = 0; i < App.getResponse().points.length; i++)
        {
            if (App.getResponse().points[i][0] && App.getResponse().points[i][1])
            {
                var marker = new Model_Marker
                ({
                    "latitude": App.getResponse().points[i][1][0],
                    "longitude": App.getResponse().points[i][1][1],
                    "iconName": "null",
                    "content": App.getResponse().points[i][0],
                    "type":"point",
                    "size": 21
                });
                
                if (App.areRegions())
                {
                    marker.setRegionNumber(Util.getRegionNumberForPoint(new google.maps.LatLng(App.getResponse().points[i][1][0], App.getResponse().points[i][1][1])));
                }
                
                marker.onClick(goToMarker);
                
                App.getMarkerList().add(marker);         
            }
        }

        if (App.getMapKind() === "m")
        {
            Util_Map.load();
            Util_Map.adjust();
        }
        else if (App.getMapKind() === "s" && App.areRegions())
        {
            Util_Regions.load();
            Util_Regions.adjust();
        }
        else if (App.getMapKind() === "r" && App.areRegions())
        {
            Util_Region.load(Util.getRegionNumberFromURL());
        }
    },
    refresh: function()
    {
        App.getMap().setZoom(App.getMap().getZoom() + 1);
        App.getMap().setZoom(App.getMap().getZoom() - 1);
    },
    hidePlacemarks: function()
    {
        App.getPolygonList().hideAll();
        App.getMarkerList().hideAll();
    },
    areRegions: function()
    {
        return this.regionsFlag;
    },
    setMap: function(map)
    {
        this.map = map;
    },
    setMapKind: function(kind)
    {
        this.mapKind = kind;
    },
    setMode: function(mode)
    {
        this.mode = mode;
    },
    setPolygonList: function(list)
    {
        this.polygonList = list;
    },
    setMarkerList: function(list)
    {
        this.markerList = list;
    },
    setResponse: function(response)
    {
        this.response = response;
    },
    setRegionsFlag: function(flag)
    {
        this.regionsFlag = flag;
    },
    setAndroidVersion: function(version)
    {
        this.androidVersion = version;
    },
    getMap: function()
    {
        return this.map;
    },
    getMapKind: function()
    {
        return this.mapKind;
    },
    getMode: function()
    {
        return this.mode;
    },
    getPolygonList: function()
    {
        return this.polygonList;
    },
    getMarkerList: function()
    {
        return this.markerList;
    },
    getResponse: function()
    {
        return this.response;
    },
    getAndroidVersion: function()
    {
        return this.androidVersion;
    }
};