Model_Polygon = function(options)
{
    if (options.visible !== undefined)
    {
        this.visible = options.visible;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    if (options.gps !== undefined)
    {
        this.gps = options.gps;
    }
	
	////////////////////////////////////////////////////////////////////////////
    
    if (options.center === undefined)
    {
        throw "'center' of polygon is required";
    }
    else
    {
        this.center = options.center;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    if (options.name === undefined)
    {
        throw "'name' of polygon is required";
    }
    else
    {
        this.name = options.name;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    if (options.number === undefined)
    {
        throw "'number' of polygon is required";
    }
    else
    {
        this.number = options.number;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    if (options.points !== undefined)
    {
        this.points = options.points;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    if (options.paths === undefined)
    {
        throw "'paths' of polygon are required";
    }
    else
    {
        this.paths = options.paths;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    if (options.rectangle === undefined)
    {
        throw "'rectangle' of polygon is required";
    }
    else
    {
        this.rectangle = options.rectangle;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    if (options.type === undefined)
    {
        throw "'type' of polygon is required";
    }
    else
    {
        this.type = options.type.replace(/(\r\n|\n|\r)/gm,"");
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    if (options.kind === undefined)
    {
        throw "'kind' of polygon is required";
    }
    else
    {
        this.kind = options.kind.replace(/(\r\n|\n|\r)/gm,"");
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    var options = Style[this.kind][this.type];
    options.paths = this.paths;
    this.handle = new google.maps.Polygon(options);
};

//set
Model_Polygon.prototype.setCenter = function(center)
{
    this.center = center;
};

Model_Polygon.prototype.setGPS = function(gps)
{
    this.gps = gps;
};

Model_Polygon.prototype.setName = function(name)
{
    this.name = name;
};

Model_Polygon.prototype.setNumber = function(number)
{
    this.number = number;
};

Model_Polygon.prototype.setPoints = function(points)
{
    this.points = points;
};

Model_Polygon.prototype.setPaths = function(paths)
{
    this.paths = paths;
};

Model_Polygon.prototype.setRectangle = function(rectangle)
{
    this.rectangle = rectangle;
};

Model_Polygon.prototype.setType = function(type)
{
    this.type = type;
};

Model_Polygon.prototype.setKind = function(kind)
{
    this.kind = kind;
};

Model_Polygon.prototype.setVisible = function(flag)
{
    this.visible = flag;
};

//get
Model_Polygon.prototype.getCenter = function()
{
    return this.center;
};

Model_Polygon.prototype.getGPS = function()
{
    return this.gps;
};

Model_Polygon.prototype.getName = function()
{
    return this.name;
};

Model_Polygon.prototype.getNumber = function()
{
    return this.number;
};

Model_Polygon.prototype.getPoints = function()
{
    return this.points;
};

Model_Polygon.prototype.getPaths = function()
{
    return this.paths;
};

Model_Polygon.prototype.getRectangle = function()
{
    return this.rectangle;
};

Model_Polygon.prototype.getType = function()
{
    return this.type;
};

Model_Polygon.prototype.getKind = function()
{
    return this.kind;
};

Model_Polygon.prototype.getHandle = function()
{
    return this.handle;
};

Model_Polygon.prototype.getVisible = function()
{
    return this.visible;
};

//events
Model_Polygon.prototype.onClick = function(callback)
{
    google.maps.event.addListener(this.handle, "click", function(scoped){return function(){callback(scoped);};}(this));
};

//hide
Model_Polygon.prototype.hide = function()
{
    this.handle.setMap(null);
    this.visible = false;
};

//show
Model_Polygon.prototype.show = function()
{
    this.handle.setMap(App.getMap());
    this.visible = true;
};