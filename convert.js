function row(name, symbol) {
    var div = $("<tr>");
    var dataname = $("<td>");
    var datasymbol = $("<td>");
    dataname.text(name);
    datasymbol.text(symbol);
    div.append(dataname);
    div.append(datasymbol);
    return div;
}
function table(style, rowstyle, datastyle, rows) {
    var tab = $("<table>");
    tab.attr("style", style);    
    rows.forEach(function(item, index) {
        var ic = item;
        ic.attr("style",rowstyle);
        tab.append(ic);
    })
    $("body").append(tab);
}