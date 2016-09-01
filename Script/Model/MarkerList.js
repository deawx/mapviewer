Model_MarkerList = function() 
{
    this.list = [];
};

Model_MarkerList.prototype.add = function(marker)
{
    this.list.push(marker);
};

Model_MarkerList.prototype.getFirst = function(parameter, pattern)
{
    for (var marker in this.list)
    {
        if (pattern == this.list[marker][parameter])
        {
            return this.list[marker];
        }
    }
};

Model_MarkerList.prototype.getRange = function(parameter, pattern)
{
    var list = new Model_MarkerList();
        
    for (var marker in this.list)
    {
        if (pattern == this.list[marker][parameter])
        {
            list.add(this.list[marker]);
        }
    }
    
    return list;
};

Model_MarkerList.prototype.getList = function()
{
    return this.list;
};

//hide
Model_MarkerList.prototype.hideFirst = function(parameter, pattern)
{
    for (var marker in this.list)
    {
        if (pattern == this.list[marker][parameter])
        {
            this.list[marker].hide();
            return;
        }
    }
};

Model_MarkerList.prototype.hideRange = function(parameter, pattern)
{
    for (var marker in this.list)
    {
        if (pattern == this.list[marker][parameter])
        {
            this.list[marker].hide();
        }
    }
};

Model_MarkerList.prototype.hideAll = function()
{
    for (var marker in this.list)
    {
        this.list[marker].hide();
    }
};

//show
Model_MarkerList.prototype.showFirst = function(parameter, pattern)
{
    for (var marker in this.list)
    {
        if (pattern == this.list[marker][parameter])
        {
            this.list[marker].show();
            return;
        }
    }
};

Model_MarkerList.prototype.showRange = function(parameter, pattern)
{
    for (var marker in this.list)
    {
        if (pattern == this.list[marker][parameter])
        {
            this.list[marker].show();
        }
    }
};

Model_MarkerList.prototype.showAll = function()
{
    for (var marker in this.list)
    {
        this.list[marker].show();
    }
};

Model_MarkerList.prototype.updateSize = function(size)
{
    for (var marker in this.list)
    {
        this.list[marker].updateSize(size);
    }
};