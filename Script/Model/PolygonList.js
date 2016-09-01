Model_PolygonList = function() 
{
    this.list = [];
};

//add
Model_PolygonList.prototype.add = function(polygon)
{
    this.list.push(polygon);
};

//get
Model_PolygonList.prototype.getFirst = function(parameter, pattern)
{
    for (var polygon in this.list)
    {
        if (pattern == this.list[polygon][parameter])
        {
            return this.list[polygon];
        }
    }
};

Model_PolygonList.prototype.getRange = function(parameter, pattern)
{
    var list = new Model_PolygonList();
        
    for (var polygon in this.list)
    {
        if (pattern == this.list[polygon][parameter])
        {
            list.add(this.list[polygon]);
        }
    }
    
    return list;
};

Model_PolygonList.prototype.getList = function()
{
    return this.list;
};

//hide
Model_PolygonList.prototype.hideFirst = function(parameter, pattern)
{
    for (var polygon in this.list)
    {
        if (pattern == this.list[polygon][parameter])
        {
            this.list[polygon].hide();
            return;
        }
    }
};

Model_PolygonList.prototype.hideRange = function(parameter, pattern)
{
    for (var polygon in this.list)
    {
        if (pattern == this.list[polygon][parameter])
        {
            this.list[polygon].hide();
        }
    }
};

Model_PolygonList.prototype.hideAll = function()
{
    for (var polygon in this.list)
    {
        this.list[polygon].hide();
    }
};

//show
Model_PolygonList.prototype.showFirst = function(parameter, pattern)
{
    for (var polygon in this.list)
    {
        if (pattern == this.list[polygon][parameter])
        {
            this.list[polygon].show();
            return;
        }
    }
};

Model_PolygonList.prototype.showRange = function(parameter, pattern)
{
    for (var polygon in this.list)
    {
        if (pattern == this.list[polygon][parameter])
        {
            this.list[polygon].show();
        }
    }
};

Model_PolygonList.prototype.showAll = function()
{
    for (var polygon in this.list)
    {
        this.list[polygon].show();
    }
};