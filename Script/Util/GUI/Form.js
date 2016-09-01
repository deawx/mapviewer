var Util_GUI_Form =
{
    display: function(code)
    {
        if (document.getElementById("plus"))
        {
            document.getElementById("plus").style.display = "none";
        }
        
        if (document.getElementById("minus"))
        {
            document.getElementById("minus").style.display = "none";
        }
        
        document.getElementById("wrapper").style.display = "block";
        document.getElementById("wrapper").innerHTML = code;
    },
    hide: function()
    {
        document.getElementById("wrapper").style.display = "none";
        document.getElementById("wrapper").innerHTML = "";
        
        if (document.getElementById("plus"))
        {
            document.getElementById("plus").style.display = "block";
        }
        
        if (document.getElementById("minus"))
        {
            document.getElementById("minus").style.display = "block";
        }
    } 
};