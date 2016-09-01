var View_Searching = 
{
    show: function()
    {
        Util_GUI_Panel.content.label(Util_Locale._("Finding address").toUpperCase());
        Util_GUI_Panel.content.form
        (
            '<div>' + Util_Locale._("If you know the address, but not it's location on the map, use this feature") + '.</div>\n\
            <div class="buttons"><input type="text" placeholder="' + Util_Locale._("Enter address here") + '" id="input_search"><div class="button" id="button_search">' + Util_Locale._("search").toUpperCase() + '</div></div>'
        );

        google.maps.event.addDomListener(document.getElementById("button_search"), "click", function()
        {
            var address = document.getElementById("input_search").value;
            
            if (address)
            {
                Util_Searching.search(address);
                google.maps.event.trigger(App.buttons.control.menu, 'click');
            }
        });
    }
};