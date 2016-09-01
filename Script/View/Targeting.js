var View_Targeting = 
{
    show: function()
    {
        var caption, backgroundColor, borderColor, fontColor, diodeColor;
        
        if (Util_Targeting.getEnabled())
        {
            caption = Util_Locale._("enabled").toUpperCase();
            backgroundColor = "#CCFF99";
            borderColor = "#CCFF99";
            fontColor = "black";
            diodeColor = "#c0ffbc";
        }
        else
        {
            caption = Util_Locale._("disabled").toUpperCase();
            backgroundColor = "#3A3B3D";
            borderColor = "#EFEFEF";
            fontColor = "white";
            diodeColor = "#FFFB85";
        }
        
        Util_GUI_Panel.content.label(Util_Locale._("Getting address").toUpperCase());
        Util_GUI_Panel.content.form
        (
            '<div>' + Util_Locale._("You are going to enable getting address mode") + ". " + Util_Locale._("Being in this mode, you will get the address of every place you touch on the map") + ". " + Util_Locale._("In other words, if you know location on the map, but not it's address use this feature") + '.</div>\n\
            <div class="buttons"><div class="button" id="button_target"><span>' + caption + '</span></div></div>'
        );

        document.getElementById("button_target").style.backgroundColor = backgroundColor;
        document.getElementById("button_target").style.borderColor = borderColor;
        document.getElementById("button_target").style.color = fontColor;
        document.getElementById("targeting").lastChild.style.backgroundColor = diodeColor;

        google.maps.event.addDomListener(document.getElementById("button_target"), "click", function()
        {
            if (!Util_Targeting.getEnabled())
            {
                Util_Targeting.enable();
                document.getElementById("button_target").innerHTML = Util_Locale._("enabled").toUpperCase();
                document.getElementById("button_target").style.color = "black";
                document.getElementById("button_target").style.backgroundColor = "#CCFF99";
                document.getElementById("button_target").style.borderColor = "#CCFF99";
                document.getElementById("targeting").lastChild.style.backgroundColor = "#c0ffbc";
                setTimeout(function(){google.maps.event.trigger(App.buttons.control.menu, 'click');}, 700);
            }
            else
            {
                document.getElementById("button_target").innerHTML = Util_Locale._("disabled").toUpperCase();
                document.getElementById("button_target").style.color = "white";
                document.getElementById("button_target").style.backgroundColor = "#3A3B3D";
                document.getElementById("button_target").style.borderColor = "#EFEFEF";
                document.getElementById("targeting").lastChild.style.backgroundColor = "#FFFB85";
                Util_Targeting.disable();
            }
        });
    }    
};