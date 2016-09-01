var View_Information = 
{
    show: function()
    {
        if (App.getMapKind() === "m")
        {
            Util_GUI_Panel.content.label(Util_Locale._("information").toUpperCase() + ': ' + Util.capitalize(Util_Locale._("map")));
            Util_GUI_Panel.content.form
            (
                '<div class="table">\n\
                    <table>\n\
                        <tr>\n\
                            <th class="color_column">#</th>\n\
                            <th class="description_column">' + Util.capitalize(Util_Locale._("description")) + '</th>\n\
                        </tr>\n\
                        <tr>\n\
                            <td class="color_column"><div id="map_default" class="square"></div></td>\n\
                            <td class="description_column">' + Util_Locale._("We are working inside marked boundaries") + '</td>\n\
                        </tr>\n\
                    </table>\n\
                </div>'
            );

            document.getElementById("map_default").style.backgroundColor = Style["map"]["df"].strokeColor;
        }
        else
        {
            Util_GUI_Panel.content.label(Util_Locale._("information").toUpperCase() + ': ' + Util.capitalize(Util_Locale._("regions")));
            Util_GUI_Panel.content.form
            (
                '<div class="table">\n\
                    <table>\n\
                        <tr>\n\
                            <th class="color_column">#</th>\n\
                            <th class="description_column">' + Util.capitalize(Util_Locale._("description")) + '</th>\n\
                        </tr>\n\
                        <tr>\n\
                            <td class="color_column"><div id="region_default" class="square"></div></td>\n\
                            <td class="description_column">' + Util_Locale._("Map's region without specified type") + '</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td class="color_column"><div id="region_estate" class="square"></div></td>\n\
                            <td class="description_column">' + Util.capitalize(Util_Locale._("estate")) + '</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td class="color_column"><div id="region_industrial_area" class="square"></div></td>\n\
                            <td class="description_column">' + Util_Locale._("Industrial area") + '</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td class="color_column"><div id="region_business_area" class="square"></div></td>\n\
                            <td class="description_column">' + Util_Locale._("Business area") + '</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td class="color_column"><div id="region_potentially_dangerous" class="square"></div></td>\n\
                            <td class="description_column">' + Util_Locale._("Potentially dangerous area") + '</td>\n\
                        </tr>\n\
                    </table>\n\
                </div>'
            );

            document.getElementById("region_default").style.backgroundColor = Style["region"]["df"].strokeColor;
            document.getElementById("region_estate").style.backgroundColor = Style["region"]["es"].strokeColor;
            document.getElementById("region_industrial_area").style.backgroundColor = Style["region"]["ia"].strokeColor;
            document.getElementById("region_business_area").style.backgroundColor = Style["region"]["ba"].strokeColor;
            document.getElementById("region_potentially_dangerous").style.backgroundColor = Style["region"]["pd"].strokeColor;
        }
    }
};