var Util_GUI_Panel = 
{
    show: function()
    {
        View_Panel.show();
        App.buttons.control.menu.style.opacity = "1.0";
        Util_GUI_Panel.insertIcon("menu-opened");
        Util_GUI_Panel.visible = true;
    },
    hide: function()
    {
        View_Panel.hide();
        App.buttons.control.menu.style.opacity = "0.6";
        Util_GUI_Panel.insertIcon("menu-closed");
        Util_GUI_Panel.visible = false;
    },
    insertIcon: function(name)
    {
        App.buttons.control.menu.innerHTML = Util_Resource_Image.insertImage(name);
    },
    isVisible: function()
    {
        return Util_GUI_Panel.visible;
    },
    addEventListeners: function()
    {
        google.maps.event.addDomListener(document.getElementById("globe"), 'click', function()
        {
            if (App.getMap().getMapTypeId() === "satellite")
            {
                return;
            }
            else
            {
                Util_GUI_Panel.basicBar.mapType.highlightGlobe();
                App.getMap().setMapTypeId(google.maps.MapTypeId.SATELLITE);
            }
        });
        
        google.maps.event.addDomListener(document.getElementById("mapa"), 'click', function()
        {
            if (App.getMap().getMapTypeId() === "roadmap")
            {
                return;
            }
            else
            {
                Util_GUI_Panel.basicBar.mapType.highlightMap();
                App.getMap().setMapTypeId(google.maps.MapTypeId.ROADMAP);
            }
        });
        
        google.maps.event.addDomListener(document.getElementById("m"), 'click', function()
        {
            if (App.getMapKind() === "m")
            {
                Util_Map.adjust();
            }
            else
            {
                Util_GUI_Panel.basicBar.mapKind.highlightMap();
                Util_Map.load();
                
                if (App.buttons.panel.info.show)
                {
                    google.maps.event.trigger(document.getElementById("info"), 'click');
                }
            }
        });

        google.maps.event.addDomListener(document.getElementById("mr"), 'click', function()
        {
            if (!App.areRegions())
            {
                alert(Util_Locale._("This map does not have regions yet"));
                return;
            }
            
            if (App.getMapKind() === "s")
            {
                Util_Regions.adjust();
            }
            else
            {
                Util_GUI_Panel.basicBar.mapKind.highlightRegions();
                Util_Regions.load();
                
                if (App.getMapKind() === "r")
                {
                    Util_Regions.adjust();
                }
                
                if (App.buttons.panel.info.show)
                {
                    google.maps.event.trigger(document.getElementById("info"), 'click');
                }
            }
        });

        google.maps.event.addDomListener(document.getElementById("r"), 'click', function()
        {
            if (!App.areRegions())
            {
                alert(Util_Locale._("This map does not have regions yet"));
                return;
            }
            
            if (App.getMapKind() === "r")
            {
                Util_Region.adjust();
            }
            else
            {
                if (App.getMapKind() === "m")
                {
                    alert(Util_Locale._("Select regions view, close this panel and touch the region you want to view") + ".");
                }
                else if (App.getMapKind() === "s")
                {
                    alert(Util_Locale._("Close this panel and touch the region you want to view") + ".");
                } 
            }
        });
        
        google.maps.event.addDomListener(document.getElementById("info"), 'click', function()
        {
            Util_GUI_Panel.toolBar.highlightInfo();
            View_Information.show();
        });
        
        google.maps.event.addDomListener(document.getElementById("search"), 'click', function()
        {
            Util_GUI_Panel.toolBar.highlightSearch();
            View_Searching.show();
        });
        
        google.maps.event.addDomListener(document.getElementById("targeting"), 'click', function()
        {
            Util_GUI_Panel.toolBar.highlightTargeting();
            View_Targeting.show();
        });
        
        google.maps.event.addDomListener(document.getElementById("settings"), 'click', function()
        {
            Util_GUI_Panel.toolBar.highlightSettings();
            View_Settings.show();
        });
    },
    "basicBar":
    {
        "mapType":
        {
            highlightMap: function()
            {
                Util.highlight("mapa");
                Util.unhighlight("globe");
            },
            highlightGlobe: function()
            {
                Util.highlight("globe");
                Util.unhighlight("mapa");
            }
        },
        "mapKind":
        {
            highlightMap: function()
            {
                Util_Map.highlightControl();
            },
            highlightRegion: function()
            {
                Util_Region.highlightControl();
            },
            highlightRegions: function()
            {
                Util_Regions.highlightControl();
            }
        }
    },
    "toolBar":
    {
        highlightInfo: function()
        {
            Util.highlight("info");
            Util.unhighlight("search");
            
            if (!Util_Targeting.getEnabled())
            {
                Util.unhighlight("targeting");
            }
            
            Util.unhighlight("settings");
        },
        highlightSearch: function()
        {
            Util.highlight("search");
            Util.unhighlight("info");
            
            if (!Util_Targeting.getEnabled())
            {
                Util.unhighlight("targeting");
            }
            
            Util.unhighlight("settings");
        },
        highlightTargeting: function()
        {
            Util.highlight("targeting");
            Util.unhighlight("info");
            Util.unhighlight("search");
            Util.unhighlight("settings");
        },
        highlightSettings: function()
        {
            Util.highlight("settings");
            Util.unhighlight("info");
            Util.unhighlight("search");
            
            if (!Util_Targeting.getEnabled())
            {
                Util.unhighlight("targeting");
            }
        }
    },
    "content":
    {
        label: function(name)
        {
            document.getElementById("content").getElementsByTagName("div")[0].innerHTML = name;
        },
        form: function(code)
        {
            document.getElementById("content").getElementsByTagName("div")[1].innerHTML = code;
        }
    }
};