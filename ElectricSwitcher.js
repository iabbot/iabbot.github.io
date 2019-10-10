function returnNut(parent) {
    return "<script>commandNameSlider2(\"Nut\", "+parent+");</script><p>nut</p>";
}
function SetParameters(arrayParams) {
    var params = $("#parameters");
    params.empty();
    var paramsName = $("<p>");
    paramsName.text("PARAMETERS");
    paramsName.attr("style", "font-size:12pt");
    params.append(paramsName);
    var ParamsHeight = 0;
    arrayParams.forEach(function(item, index) {
        var pars = $("<p>");
        pars.text(item);
        params.append(pars);
        ParamsHeight += 5;
    })
    params.attr("style", "width:100%;height:" + String(ParamsHeight) + "%;display:inline-block");
}
function SetPanelContents(html) {
        $("#panel").empty();
        $("#panel").append(html);
}
function CollapseSubcommandsPanel() {
    $("#SubcommandSelector").attr("style", "overflow-y:auto;width:0%;height:100%;background-color:#5375AF;float:left;display:inline-block;text-align:center;");
    $("#panel").attr("style", "width:84%;height:100%;float:right;display:inline-block");
}
function ExpandSubcommandsPanel() {
    $("#SubcommandSelector").attr("style", "overflow-y:auto;width:15%;height:100%;background-color:#5375AF;float:left;display:inline-block;text-align:center;");
    $("#panel").attr("style", "width:70%;height:100%;float:right;display:inline-block");
}
function ClearSubcommands() {
    $("#SubcommandSelector").empty();
    var par = $("<p>");
    par.text("Subcommands");
    $("#SubcommandSelector").append(par);
}
function SetDescription(text) {
    var paramsName = $("<p>");
    paramsName.text("DESCRIPTION");
    paramsName.attr("style", "font-size:12pt");
    $("#description").empty();
    $("#description").append(paramsName);
    $("#description").append(text);
}
function SetSyntax(syn, admin) {
    $("#syntax").text(syn);
    $("#syntax").attr("style", "font-family:courier;color:" + (admin ? "#BB0077" : "black"));
}
function Button(name, func) {
    var butt = $("<button>");
        var but = $("<div>");
        var p = $("<p>");
        p.text(name);
        but.append(p);
        butt.append(but);
        butt.attr("style", "width:100%;height:2em;background-color:white;border:none;color:black;text-decoration:none;display:inline-block;text-align:center;text-decoration:none;");
        butt.attr("onclick", func);
        $("#CommandSelector").append(butt);
}
function FButton(name, func) {
    var aA = $("<a>");
    aA.attr("href",func);
    var butt = $("<button>");
        var but = $("<div>");
        var p = $("<p>");
        p.text(name);
        but.append(p);
        butt.append(but);
        butt.addClass("hlink");
        butt.attr("style", "width:100%;height:2em;background-color:white;border:none;display:inline-block;text-align:center;text-decoration:none;padding:1px 6px");
        //butt.attr("href", func);
    aA.append(butt);
        $("#CommandSelector").append(aA);
}
function SButton(name, func) {
    var butt = $("<button>");
        var but = $("<div>");
        var p = $("<p>");
        p.text(name);
        but.append(p);
        butt.append(but);
        butt.attr("style", "width:100%;height:2em;background-color:white;border:none;display:inline-block;text-align:center;text-decoration:none;");
        butt.attr("onclick", func);
        $("#SubcommandSelector").append(butt);
}