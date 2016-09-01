var Model_Marker = function(options)
{
    if (options.regionNumber !== undefined)
    {
        this.regionNumber = options.regionNumber;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    if (options.visible !== undefined)
    {
        this.visible = options.visible;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    if (options.latitude === undefined)
    {
        throw "'latitude' of marker is required";
    }
    else
    {
        this.latitude = options.latitude;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    if (options.longitude === undefined)
    {
        throw "'longitude' of marker is required";
    }
    else
    {
        this.longitude = options.longitude;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    if (options.iconName === undefined)
    {
        throw "'iconName' of marker is required";
    }
    else
    {
        this.iconName = options.iconName;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    if (options.content === undefined)
    {
        throw "'content' of marker is required";
    }
    else
    {
        this.content = options.content;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    if (options.type === undefined)
    {
        throw "'type' of marker is required";
    }
    else
    {
        this.type = options.type;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    if (options.size === undefined)
    {
        throw "'size' of marker is required";
    }
    else
    {
        this.size = options.size;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    this.handle = new MarkerWithLabel
    ({
        position: new google.maps.LatLng(this.latitude, this.longitude),
        icon: "./Graphics/Markers/" + this.iconName + ".png",
        draggable: false,
        raiseOnDrag: false,
        labelContent: this.content,
        labelClass: "marker " + this.type + " zoom_" + this.size,
        labelInBackground: false,
        labelAnchor: new google.maps.Point((10 + (this.content.length * 10)) / 2,12)
    });
};

//set
Model_Marker.prototype.setRegionNumber = function(regionNumber)
{
    this.regionNumber = regionNumber;
};

Model_Marker.prototype.setLatitude = function(latitude)
{
    this.latitude = latitude;
};

Model_Marker.prototype.setLongitude = function(longitude)
{
    this.longitude = longitude;
};

Model_Marker.prototype.setIconName = function(iconName)
{
    this.iconName = iconName;
};

Model_Marker.prototype.setContent = function(content)
{
    this.content = content;
};

Model_Marker.prototype.setType = function(type)
{
    this.type = type;
};

Model_Marker.prototype.setSize = function(size)
{
    this.size = size;
};

Model_Marker.prototype.setVisible = function(flag)
{
    this.visible = flag;
};

//get
Model_Marker.prototype.getRegionNumber = function()
{
    return this.regionNumber;
};

Model_Marker.prototype.getLatitude = function()
{
    return this.latitude;
};

Model_Marker.prototype.getLongitude = function()
{
    return this.longitude;
};

Model_Marker.prototype.getIconName = function()
{
    return this.iconName;
};

Model_Marker.prototype.getContent = function()
{
    return this.content;
};

Model_Marker.prototype.getType = function()
{
    return this.type;
};

Model_Marker.prototype.getSize = function()
{
    return this.size;
};

Model_Marker.prototype.getHandle = function()
{
    return this.handle;
};

Model_Marker.prototype.getVisible = function()
{
    return this.visible;
};

//update
Model_Marker.prototype.updateLatitude = function(latitude)
{
    this.setLatitude(latitude);
    this.handle.position = new google.maps.LatLng(latitude, this.longitude);
};

Model_Marker.prototype.updateLongitude = function(longitude)
{
    this.setLongitude(longitude);
    this.handle.position = new google.maps.LatLng(this.latitude, longitude);
};

Model_Marker.prototype.updateSize = function(size)
{
    this.setSize(size);
    this.handle.labelClass = "marker " + this.type + " zoom_" + size;
};

Model_Marker.prototype.updateContent = function(content)
{
    this.setContent(content);
    this.handle.labelContent = content;
};

//events
Model_Marker.prototype.onClick = function(callback)
{
    google.maps.event.addListener(this.handle, "click", function(scoped){return function(){callback(scoped);};}(this));
};

//hide
Model_Marker.prototype.hide = function()
{
    this.handle.setMap(null);
    this.visible = false;
};

//show
Model_Marker.prototype.show = function()
{
    this.handle.setMap(App.getMap());
    this.visible = true;
};