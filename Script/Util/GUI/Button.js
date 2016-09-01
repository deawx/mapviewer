var Util_GUI_Button = 
{
    initialize: function()
    {
        App.buttons = {};
        App.buttons.control = {};
        App.buttons.panel = {};
    },
    createButton: function(type, buttonName, svgName)
    {
        var element = document.createElement("div");
        element.id = buttonName;
        element.className = type;
        
        if (type === "control")
        {
            var map = document.getElementById('map');
            element.innerHTML = Util_Resource_Image.insertImage(svgName);
            App.buttons.control[buttonName] = element;
            map.appendChild(element);
        }
        else if (type === "panel")
        {
            element.innerHTML = '<a>' + Util_Resource_Image.insertImage(svgName) + '</a><div class="diode"></div>';
            App.buttons.panel[buttonName] = element;
        }
    }
};