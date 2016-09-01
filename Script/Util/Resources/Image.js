var Util_Resource_Image = 
{
    "images":
    [
        /* Control */
        "menu-opened",
        "menu-closed",
        /* Panel */
        "magnifier",
        "globe",
        "map",
        "m",
        "mr",
        "r",
        "viewfinder",
        "gears",
        "magnifier",
        "i",
        "plus",
        "minus"
    ],
    load: function() 
    {
        App.images = {};
        
        for (var i = 0; i < Util_Resource_Image.images.length; i++)
        {
            var name = Util_Resource_Image.images[i];
            
            if (!App.images[name])
            {
                App.images[name] = {};
            }

            App.images[name] = new Image();
            App.images[name].src = "./Graphics/Icons/" + name + ".svg";
        }
    },
    insertImage: function(name)
    {
        return App.images[name].outerHTML;
    }
};