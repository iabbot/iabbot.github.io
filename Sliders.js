function fixVerticalCursor(ems) {
    var div = $("<div>");
    div.attr("style", "margin-top:-" + ems + ";");
    $("body").append(div);
}
function commandNameSlider(name) {
    var div = $("<div>"), img = $("<img>"), txt = $("<h1>");
    img.attr("src", "CommandSlider.png");
    img.attr("style", "width:30em; height:4em;");
    txt.text(name);
    txt.attr("style", "position:relative;bottom:1.3em;right:-1em;margin-left:0.5em;margin-right:10em;");
    div.attr("style", "text-align:center;vertical-align:middle;line-height:1em;width:500px;")
    div.append(img);
    div.append(txt);
    $("body").append(div);
    fixVerticalCursor("2.5em");
}

function adminCommandNameSlider(name) {
    var div = $("<div>"), img = $("<img>"), txt = $("<h1>");
    img.attr("src", "CommandSlider.png");
    img.attr("style", "width:30em; height:4em;");
    txt.text(name);
    txt.attr("style", "color:red;position:relative;bottom:1.3em;right:-1em;margin-left:0.5em;margin-right:10em;");
    div.attr("style", "text-align:center;vertical-align:middle;line-height:1em;width:500px;")
    div.append(img);
    div.append(txt);
    $("body").append(div);
    fixVerticalCursor("2.5em");
}

function subcommandCard(name, syntax, note) {
    var container = $("<div>"), subcontainer = $("<div>"), img = $("<img>"), txt = $("<h1>"), body = $("<p>"), syn = $("<span>"), nte = $("<p>");
    body.attr("style", "margin-top:-3em;margin-left:75px");
    syn.addClass("iabCommandSyntax");
    syn.html(syntax);
    nte.html(note);
    body.append(syn);
    body.append("<br/>");
    body.append(nte);

    img.attr("src","SubcommandNameSlider.png");
    img.attr("style", "width:25em;margin-top:1.5em;")
    txt.html(name);
    txt.attr("style", "position:relative;bottom:1.2em;right:-2.5em;margin-right:9em;margin-left:0.5em;");
    subcontainer.attr("style", "text-align:center;vertical-align:middle;line-height:1em;width:300px;");
    subcontainer.append(img);
    subcontainer.append(txt);
    container.append(subcontainer);
    container.append(body);
    $("body").append(container);
    fixVerticalCursor("1.5em");
}
function adminsubcommandCard(name, syntax, note) {
    var container = $("<div>"), subcontainer = $("<div>"), img = $("<img>"), txt = $("<h1>"), body = $("<p>"), syn = $("<span>"), nte = $("<p>");
    body.attr("style", "margin-top:-3em;margin-left:75px");
    syn.addClass("iabCommandSyntax");
    syn.html(syntax);
    nte.html(note);
    body.append(syn);
    body.append("<br/>");
    body.append(nte);

    img.attr("src","SubcommandNameSlider.png");
    img.attr("style", "width:25em;margin-top:1.5em;")
    txt.html(name);
    txt.attr("style", "color:red;position:relative;bottom:1.2em;right:-2.5em;margin-right:9em;margin-left:0.5em;");
    subcontainer.attr("style", "text-align:center;vertical-align:middle;line-height:1em;width:300px;");
    subcontainer.append(img);
    subcontainer.append(txt);
    container.append(subcontainer);
    container.append(body);
    $("body").append(container);
    fixVerticalCursor("1.5em");
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
    var div = $("<div>");
    div.attr("style", "text-align:center;vertical-align:middle;line-height:1em;width:300px;");
    img.attr("src", "SubcommandSlider.png");
    img.attr("style", "width:25em; height:4em; margin-bottom: 0px");
    txt.text("Subcommands");
    txt.attr("style", "position:relative;bottom:1em;right:-1.5em;font-size:30pt;margin-right:3em;");
    div.append(img);
    div.append(txt);
    $("body").append(div);
    fixVerticalCursor("2.5em");
}
function UnorderedParametersSlider() {
    var img = $("<img>"), txt = $("<h1>");
    var div = $("<div>");
    div.attr("style", "text-align:center;vertical-align:middle;line-height:1em;width:300px;");
    img.attr("src", "SubcommandSlider.png");
    img.attr("style", "width:25em; height:4em; margin-bottom: 0px");
    txt.text("Unordered Parameters");
    txt.attr("style", "position:relative;bottom:2.35em;right:-2.5em;line-height:100%;font-size:200%;margin-right:3em;");
    div.append(img);
    div.append(txt);
    $("body").append(div);
    fixVerticalCursor("6.5em");
}
function OrderedParametersSlider() {
    var img = $("<img>"), txt = $("<h1>");
    var div = $("<div>");
    div.attr("style", "text-align:center;vertical-align:middle;line-height:1em;width:300px;");
    img.attr("src", "SubcommandSlider.png");
    img.attr("style", "width:25em; height:4em; margin-bottom: 0px");
    txt.text("Ordered Parameters");
    txt.attr("style", "position:relative;bottom:2.35em;right:-2.5em;line-height:100%;font-size:200%;margin-right:3em;");
    div.append(img);
    div.append(txt);
    $("body").append(div);
    fixVerticalCursor("6.5em");
}

 function indexWarpSlider() {
    var a = $("<a>"), img = $("<img>");
    a.attr("href", "index.html");
    img.attr("src", "indexWarp.png");
    img.attr("style", "height:3em;margin-bottom: 0px");
    a.append(img);
    $("body").append(a);
    br();

}