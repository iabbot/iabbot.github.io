function fixVerticalCursor(ems) {
    var div = $("<div>");
    div.attr("style", "margin-top:-" + ems + ";");
    $("body").append(div);
}
function commandNameSlider(name) {
    var img = $("<img>"), txt = $("<h1>");
    img.attr("src", "CommandSlider.png");
    img.attr("style", "width:30em; height:4em;");
    txt.text(name);
    txt.attr("style", "position:relative;bottom:1.25em;right:-1em;font-size:30pt");
    $("body").append(img);
    $("body").append(txt);
}

function subcommandCard(name, syntax, note) {
    var container = $("<div>"), img = $("<img>"), txt = $("<h1>"), body = $("<p>"), syn = $("<span>"), nte = $("<p>");
    body.attr("style", "margin-top:-3em;margin-left:75px");
    syn.addClass("iabCommandSyntax");
    syn.html(syntax);
    nte.html(note);
    body.append(syn);
    body.append("<br/>");
    body.append(nte);

    img.attr("src","SubcommandNameSlider.png");
    img.attr("style", "width:22em;margin-top:1.5em;")
    txt.html(name);
    txt.attr("style", "position:relative;bottom:1em;right:-2.5em;font-size:30pt");
    container.append(img);
    container.append(txt);
    container.append(body);
    $("body").append(container);
}

function br() {
    $("body").append("<br/>");
}

function p(parahtml) {
    var div = $("<div>");
    div.html = parahtml;
    $("body").append(div);
}

function SubcommandsSlider() {
    var img = $("<img>"), txt = $("<h1>");
    img.attr("src", "SubcommandSlider.png");
    img.attr("style", "width:25em; height:4em; margin-bottom: 0px");
    txt.text("Subcommands");
    txt.attr("style", "position:relative;bottom:1em;right:-1.5em;font-size:30pt");
    $("body").append(img);
    $("body").append(txt);

}

 function indexWarpSlider() {
    var a = $("<a>"), img = $("<img>");
    a.attr("href", "index.html");
    img.attr("src", "indexWarp.png");
    img.attr("style", "height:2em;margin-bottom: 0px");
    a.append(img);
    $("body").append(a);

}