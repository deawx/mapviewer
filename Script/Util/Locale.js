var Util_Locale = 
{
    setName: function(name)
    {
        this.name = name;
    },
    getName: function()
    {
        return this.name;
    },
    getBrowserLocale: function()
    {
        this.setName(navigator.language || navigator.userLanguage);
    },
    getLanguageCode: function()
    {
        return this.getName().substring(0,2);
    },
    _: function(_key)
    {    
        var keys = messages[this.getLanguageCode()];
        
        for (var i = 0; i < keys.length; i++)
        {
            for (var key in keys[i])
            {
                if (_key === key)
                {
                    return keys[i][key];
                }
            } 
        }
    }
};