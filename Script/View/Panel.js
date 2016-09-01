var View_Panel = 
{
    show: function()
    {
        View_Panel.initialize();
        Util_GUI_Form.display
        (
            '<div id="panel">\n\
                <div id="basic">\n\
                    <div class="top">' + Util_Locale._("basic").toUpperCase() + '</div>\n\
                    <div class="bottom">\n\
                    ' + App.buttons.panel.globe.outerHTML + App.buttons.panel.mapa.outerHTML + App.buttons.panel.m.outerHTML + App.buttons.panel.mr.outerHTML + App.buttons.panel.r.outerHTML + '\n\
                    </div>\n\
                </div>\n\
                <div id="tools">\n\
                    <div class="top">' + Util_Locale._("tools").toUpperCase() + '</div>\n\
                    <div class="bottom">\n\
                    ' + App.buttons.panel.info.outerHTML + App.buttons.panel.search.outerHTML + App.buttons.panel.targeting.outerHTML + App.buttons.panel.settings.outerHTML + '\n\
                    </div>\n\
                </div>\n\
                <div id="content">\n\
                    <div class="top"></div>\n\
                    <div class="bottom"></div>\n\
                </div>\n\
            </div>'
        );

        Util_GUI_Panel.addEventListeners();
        View_Panel.finish();
    },
    hide: function()
    {
        Util_GUI_Form.hide();
    },
    initialize: function()
    {
        //map type
        if (App.getMap().getMapTypeId() === "roadmap")
        {
            Util_GUI_Panel.basicBar.mapType.highlightMap();
        }
        else if (App.getMap().getMapTypeId() === "satellite")
        {
            Util_GUI_Panel.basicBar.mapType.highlightGlobe();
        }
        
        //map kind
        if (App.getMapKind() === "m")
        {
            Util_GUI_Panel.basicBar.mapKind.highlightMap();
        }
        else if (App.getMapKind() === "s")
        {
            Util_GUI_Panel.basicBar.mapKind.highlightRegions();
        }
        else if (App.getMapKind() === "r")
        {
            Util_GUI_Panel.basicBar.mapKind.highlightRegion();
        }
    },
    finish: function()
    {
        //tools
        if (Util_Targeting.getEnabled())
        {
            google.maps.event.trigger(document.getElementById("targeting"), 'click');
        }
        else
        {
            google.maps.event.trigger(document.getElementById("info"), 'click');
        }
    }
};