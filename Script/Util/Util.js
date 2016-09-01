var Util = 
{
    getJsonPath: function(name)
    {
        var path;

        if (Config.debug)
        {
            path = name + ".json";
        }
        else
        {
            path = Config.repository.scheme + "://" + Config.repository.host + ":" + Config.repository.port + "/" + Config.repository.directory + "/" + name + ".json";
        }

        return path;
    },
    getJsonNameFromURL: function()
    {
        return window.location.search.substr(1,8);
    },
    getKindFromURL: function()
    {
        return (window.location.search.substr(9,1) === "") ? "m" : window.location.search.substr(9,1);
    },
    getRegionNumberFromURL: function()
    {
        return window.location.search.substr(10);
    },
    pad: function(str, max, pattern)
    {
        str = str.toString();
        return str.length < max ? this.pad(pattern + str, max, pattern) : str;
    },
    capitalize: function(str)
    {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    setTitleName: function(name)
    {
        document.getElementsByTagName("title")[0].innerHTML = name;
    },
    getRegionNumberForPoint: function(point)
    {
        var regions = App.getPolygonList().getRange("kind", "region");
        
        for (var i = 0; i < regions["list"].length; i++)
        {
            if (regions["list"][i].getHandle().containsLatLng(point))
            {
                return regions["list"][i].getNumber();
            }
        }
    },
    highlight: function(name)
    {
        if (document.getElementById(name))
        {
            document.getElementById(name).lastChild.style.backgroundColor = "#fffb85";
        }
        else
        {
            App.buttons.panel[name].lastChild.style.backgroundColor = "#fffb85";
        }
        
        App.buttons.panel[name].show = true;
    },
    unhighlight: function(name)
    {
        if (document.getElementById(name))
        {
            document.getElementById(name).lastChild.style.backgroundColor = "#efefef";
        }
        else
        {
            App.buttons.panel[name].lastChild.style.backgroundColor = "#efefef";
        }
        
        App.buttons.panel[name].show = false;
    },
    getAndroidVersion: function()
    { 
        var match = navigator.userAgent.match(/Android\s([0-9\.]*)/);
        return match ? match[1] : false;
    }
};