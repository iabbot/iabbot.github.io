function returnNut(parent) {
    return "<script>commandNameSlider2(\"Nut\", "+parent+");</script><p>nut</p>";
}
function SetPanelContents(html) {
        $("#panel").empty();
        $("#panel").append(html);
}
function Button(name, func) {
    var butt = $("<button>");
        var but = $("<div>");
        var p = $("<p>");
        p.text(name);
        but.append(p);
        butt.append(but);
        butt.attr("style", "width:100%;height:2em;background-color:white;border:none;display:inline-block;text-align:center;text-decoration:none;");
        butt.attr("onclick", func);
        $("#Sidebar").append(butt);
}