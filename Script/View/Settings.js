var View_Settings = 
{
    show: function()
    {
        var selected = function(option)
        {
            if (option === Util_Locale.getLanguageCode())
            {
                return " selected";
            }
            else
            {
                return "";
            }
        };
        
        var checked = function(option)
        {
            if (Util_Settings[option] === true)
            {
                return " checked";
            }
            else
            {
                return "";
            }
        };
        
        var showORhide = function(option)
        {
            if (Util_Settings[option] === true)
            {
                return Util.capitalize(Util_Locale._("show"));
            }
            else
            {
                return Util.capitalize(Util_Locale._("hide"));
            } 
        };
        
        Util_GUI_Panel.content.label(Util_Locale._("settings").toUpperCase());
        Util_GUI_Panel.content.form
        (
            '<div class="setting">\n\
                <div class="checkbox_button">\n\
                    <label>\n\
                       <input id="settings_points" type="checkbox"' + checked("displayPoints") + '/><span id="span_settings_points">' + showORhide("displayPoints") + '</span>\n\
                    </label>\n\
                </div>\n\
                <span class="checkbox_description">' + Util_Locale._("points") + '</span>\n\
            </div>\n\
            <div class="setting">\n\
                <div class="checkbox_button">\n\
                    <label>\n\
                       <input id="settings_numbers" type="checkbox"' + checked("displayRegionNumberMarkers") + '/><span id="span_settings_numbers">' + showORhide("displayRegionNumberMarkers") + '</span>\n\
                    </label>\n\
                </div>\n\
                <span class="checkbox_description">' + Util_Locale._("numbers") + '</span>\n\
            </div>\n\
            <div class="setting" id="div_settings_language">\n\
                ' + Util.capitalize(Util_Locale._("language")) + '\n\
                <select id="settings_language">\n\
                    <option value="pl"' + selected("pl") + '>' + Util_Locale._("polish") + '</option>\n\
                    <option value="en"' + selected("en") + '>' + Util_Locale._("english") + '</option>\n\
                </select>\n\
            </div>\n\
            <div class="buttons">\n\
                <div class="buttons_wrapper">\n\
                    <div class="button" id="button_settings_ok">OK</div>\n\
                    <div class="button" id="button_settings_apply">' + Util_Locale._("apply").toUpperCase() + '</div>\n\
                </div>\n\
            </div>'
        );
            
        if (!App.areRegions())
        {
            document.getElementsByClassName("setting")[1].style.display = "none";
        }

        var toggleLabel = function(_label)
        {
            var label = document.getElementById(_label);
            
            if (label.innerHTML === Util.capitalize(Util_Locale._("show")))
            {
                label.innerHTML = Util.capitalize(Util_Locale._("hide"));
            }
            else
            {
                label.innerHTML = Util.capitalize(Util_Locale._("show"));
            }
        };

        google.maps.event.addDomListener(document.getElementById("settings_points"), "click", function()
        {
            toggleLabel("span_settings_points");
        });
        google.maps.event.addDomListener(document.getElementById("settings_numbers"), "click", function()
        {
            toggleLabel("span_settings_numbers");
        });
            
        google.maps.event.addDomListener(document.getElementById("button_settings_ok"), "click", function()
        {
            Util_Settings.save();
            google.maps.event.trigger(App.buttons.control.menu, 'click');
        });
        
        google.maps.event.addDomListener(document.getElementById("button_settings_apply"), "click", function()
        {
            Util_Settings.save();
            google.maps.event.trigger(App.buttons.control.menu, 'click');
            google.maps.event.trigger(App.buttons.control.menu, 'click');
            google.maps.event.trigger(document.getElementById("settings"), 'click');
        });
    }
};