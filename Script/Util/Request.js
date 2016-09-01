var Util_Request = 
{
    send: function(url, callback) 
    {
        var createXMLHTTPObject = function() 
        {
            var xmlhttp = false;

            var XMLHTTPFactories = 
            [
                function() 
                {
                    return new XMLHttpRequest();
                },
                function() 
                {
                    return new ActiveXObject("Msxml2.XMLHTTP");
                },
                function() 
                {
                    return new ActiveXObject("Msxml3.XMLHTTP");
                },
                function() 
                {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                }
            ];

            for (var i = 0; i < XMLHTTPFactories.length; i++) 
            {
                try 
                {
                    xmlhttp = XMLHTTPFactories[i]();
                } 
                catch (e) 
                {
                    continue;
                }
                break;
            }

            return xmlhttp;
        };

        var req = createXMLHTTPObject();
        req.open("GET", url, true);
        req.setRequestHeader("User-Agent", "XMLHTTP/1.0");
        req.onreadystatechange = function() 
        {
            if (req.readyState !== 4) 
            {
                return;
            }

            if (req.status !== 200 && req.status !== 304) 
            {
                switch (req.status)
                {
                    case 403:
                        alert(Util_Locale._("Access forbidden"));
                        return;
                        
                    case 404:
                        alert(Util_Locale._("QR Code is not valid anymore") + ". " + Util_Locale._("Print out the map again") + ".");
                        return;
                        
                    case 500:
                        alert(Util_Locale._("Internal server error"));
                        return;
                        
                    default:
                        alert(Util_Locale._("HTTP error code") + ": " + req.status);
                        return;   
                }
            }

            callback(eval("(" + req.responseText + ")"));
        };

        if (req.readyState === 4) 
        {
            return;
        }

        req.send();
    }
};