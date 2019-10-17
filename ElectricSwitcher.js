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
    });
    params.attr("style", "width:100%;height:" + String(ParamsHeight) + "%;display:inline-block");
}
function SetPanelContents(html) {
    $("#panel").empty();
    $("#panel").append(html);
}
function CollapseSubcommandsPanel() {
    $("#SubcommandSelector").attr("style", "width:0%;border-radius:25px;");
    $("#panel").attr("style", "width:75%;float:right;margin-right:5%");
}
function ExpandSubcommandsPanel() {
    $("#SubcommandSelector").attr("style", "width:20%;border-radius:25px;");
    $("#panel").attr("style", "width:55%;float:right;margin-right:5%");
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
    $("#syntax").attr("style", "font-family:courier;color:" + (admin ? "#BB0077" : "white"));
}
function Button(name, func) {
    var butt = $("<button>");
    var but = $("<div>");
    var p = $("<p>");
    p.text(name);
    but.append(p);
    butt.append(but);
    butt.addClass("cmdButton");
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
    butt.addClass("cmdButton");
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
    butt.addClass("cmdButton");
    butt.attr("onclick", func);
    $("#SubcommandSelector").append(butt);
}
function NewButton(txt, col, syn, adm, des, pars) {
    var func = "";
    func += (col ? "CollapseSubcommandsPanel();" : "ExpandSubcommandsPanel();");
    func += "SetSyntax('" + syn + "'," + (adm ? "true" : "false")+");";
    func += "SetDescription(\""+des+"\");";
    func += "SetParameters([";
    try {
        pars.forEach( function (item, index) {
            func += "\"" + item + "\"";
            func += ((index == pars.length - 1) ? "]" : ",");
        });
    }
    catch  {
        func += "\"]";
    }
    func += ");";
    var butt = $("<button>");
    var but = $("<div>");
    var p = $("<p>");
    p.text(txt);
    but.append(p);
    butt.append(but);
    butt.addClass("cmdButton");
    butt.attr("onclick", func);
    $("#CommandSelector").append(butt);
}
function NewSButton(txt, syn, adm, des, pars) {
    var func = "";
    func += "SetSyntax('" + syn + "'," + (adm ? "true" : "false")+");";
    func += "SetDescription(\""+des+"\");";
    func += "SetParameters([";
    try {
        pars.forEach( function (item, index) {
            func += "\"" + item + "\"";
            func += ((index == pars.length - 1) ? "]" : ",");
        });
    }
    catch  {
        func += "\"]";
    }
    func += ");";
    var butt = $("<button>");
    var but = $("<div>");
    var p = $("<p>");
    p.text(txt);
    but.append(p);
    butt.append(but);
    butt.addClass("cmdButton");
    butt.attr("onclick", func);
    $("#SubcommandSelector").append(butt);
}
function PopulatePanel() {
    CollapseSubcommandsPanel();
    SetSyntax('',false);
    SetParameters(['I wonder if I should use this space for a changelog']);
    SetDescription('JavaScript gang.');
    NewButton("iab!50", true, 'iab!50', false, "Generates a 0 or 1.", ["None"]);
    NewButton("iab!avatar", true, 'iab!avatar %', false, "Sends a user\'s avatar.", ["%: The user whose avatar should be sent."]);
    NewButton("iab!bruh", true, 'iab!bruh % R', false, "Issues a bruh certificate to a user.", ["%: The bruh boi", "R: Reason for certification"]);
    NewButton("iab!cbt", true, 'iab!cbt', false, "CBT.", ["None"]);
    FButton  ("iab!convert", "convert.html");
    NewButton("iab!complain", true, "iab!complain M", false, "Writes a message to the console.", ["M: The message to write to the console."]);
    NewButton("iab!count", true, "iab!count M", false, "Counts the length of a message.", ["M: The message to count."]);
    NewButton("iab!die", true, "iab!die #", true, "Deletes iab's messages.", ["#: The number of messages to process."]);
    NewButton("iab!mur", true, "iab!mur % #", true, "Deletes another user's messages.", ["%: The user to target.", "#: The number of messages to process."]);
    NewButton("iab!sui", true, "iab!sui #", false, "Deletes your own messages.", ["#: The number of messages to process."]);
    NewButton("iab!edge", true, "iab!edge {unorderedParameters}", false, "Generates an edgemap. If no options are specified, these values are used: Bias 0, Color FFFFFF, Multiplier 1, Search-Radius 1, Tolerance 30, AlphaMode 1. If no image is specified, iab will search up to 32 messages above the calling message to find an applicable image. Alpha Modes: 0 means that pixels defined as edges have 255 alpha, and other pixels have 0 alpha. 1 uses the image's old alpha value, and 2 uses the contrast of the pixels to determine the alpha.", ["Image: The image to create an edgemap from. Can be linked, attached, or linked from MEGA with -mega (link)", "-bias #: Add or subtract this amount from the final alpha amounts.", "-color hex#: The color of the edgemap.", "-hue: Uses the color of the image instead of the color specified, if any.", "-multiplier #: Multiply the alpha value by this number (before bias)", "-radius #: Use this radius to search for edges.", "-tolerance #: The amount a channel must differ to be considered an edge.", "-alphamode #: The mode of alpha calculation to use. See the description."]);
    NewButton("iab!edgy", true, "iab!edgy B T F", false, "Attempts to soften a poorly cut png. All parameters are optional (except image lol)", ["B: Lowers the alpha of selected pixels by this amount.", "The amount the alpha channel must differ from the extremes to be selected (so 16 would be alpha values 16 - 239).", "F: The range, in pixels, to feather the alpha values."]);
    NewButton("iab!gencol", true, "iab!gencol R G B (or iab!generatecolor R G B)", false, "Generates a small image of a specified color. I'm not writing the parameters because they're obvious. Fight me.", ["arr gee bee"]);
    NewButton("iab!gensslink", true, "iab!gensslink", false, "Generates a link that users can click to share screens.", ["None"]);
    NewButton("iab!inactives", true, "iab!inactives D T", true, "Gives a list of users that haven't sent messages recently.", ["D: The amount of days in the past to consider 'recent'.", "T: The number of messages to go through (Max 2000)"]);
    Button   ("iab!info", "\
        ExpandSubcommandsPanel();\
        ClearSubcommands();\
        SetSyntax('',false);\
        SetDescription('');\
        NewSButton('Emote', 'iab!info emote [-ec]', false, 'Sends info about emotes. If -ec is specified, iab will make the output smaller.', ['None']);\
        NewSButton('Invite', 'iab!info invite [-ic]', false, 'Sends info about invites. If -ic is specified, iab will use shorter field names.', ['None']);\
        NewSButton('Guild', 'iab!info guild', false, 'Sends general information about the server.', ['None']);\
        NewSButton('General', 'iab!info general [-ic] [-ec]', false, 'Equivalent to iab!info guild, iab!info emote, and iab!info invite. -ec and -ic are passed to their respective commands.', ['None']);\
        NewSButton('User', 'iab!info user %', false, 'Lists information about a user.', ['%: The user to examine.']);");
    NewButton("iab!invite", true, "iab!invite", false, "Shh! It's a trap for people who don't know that the real invite command is iabinv.", ["None."]);
    FButton  ("iab!knows", "knows.html");
    NewButton("iab!nut", true, "iab!nut", false, "Nut.", ["Nut."]);
    NewButton("iab!permissions", true, "iab!permissions %", false, "Sends a flashy image containing a user's permissions. A red name means that the user has Change Nickname.", ["%: The user to examine."]);
    NewButton("iab!ping", true, "iab!ping", false, "Ping iab. iab does not like it when you ping it, but you still can.", ["None."]);
    NewButton("iab!planned", true, "iab!planned", false, "See what I am plotting <a href='planned.html'>here.</a>", ["None."]);
    NewButton("iab!plus", true, "iab!plus", false, "The eventual premium tier of iab. It's currently not implemented (since the Patreon isn't live), but you can still read about it.", ["None."]);
    NewButton("iab!remind", true, "iab!remind # T", false, "iab will remind you about something (This is currently lost if iab is restarted.)", ["#: The number of seconds to wait before sending the reminder.", "T: The message to send."]);
    Button("iab!rex", "\
        ExpandSubcommandsPanel();\
        ClearSubcommands();\
        SetSyntax('',false);\
        SetDescription('Runtime extensions are a way to add commands to iab while it is running. Runtime extensions can be used by using the prefix rex! instead of iab!. Whoever made the runtime extension must also be in the server for it to work.');\
        SButton('Create','\
            SetSyntax(\"iab!rex create T R\",false);\
            SetDescription(\"Creates a new runtime extension\");\
            SetParameters([\"T: The trigger for the command\", \"R: The response for the command\"])');\
        SButton('Delete','\
            SetSyntax(\"iab!rex delete T\",false);\
            SetDescription(\"Deletes a runtime extension\");\
            SetParameters([\"$: The role to delete\"]);');\
        SButton('Deleteall','\
            SetSyntax(\"iab!rex deleteall\",false);\
            SetDescription(\"Deletes all of your runtime extensions\");\
            SetParameters([\"None\"]);');\
        SButton('List','\
            SetSyntax(\"iab!rex list [all]\",false);\
            SetDescription(\"Lists your runtime extensions, or everyones if [all] was specified.\");\
            SetParameters([\"None\"]);');\
        ");
    //Role
    Button("iab!role", "\
        ExpandSubcommandsPanel();\
        ClearSubcommands();\
        SetSyntax('',false);\
        NewSButton('Assign', 'iab!role assign % $', true, 'Assigns a role to a user.', ['%: The user to target.', '$: The role to assign']);\
        NewSButton('Assignall', 'iab!role assignall $', true, 'Assigns a role to every user.', ['$: The role to assign']);\
        NewSButton('Unassign', 'iab!role unassign % $', true, 'Unassigns a role to a user.', ['%: The user to target.', '$: The role to unassign']);\
        NewSButton('Unassignall', 'iab!role unassignall $', true, 'Unassigns a role to every user.', ['$: The role to unassign']);\
        NewSButton('Create', 'iab!role create # N', true, 'Creates a new role.', ['#: The color of the role (decimal, optional)', \"N: The role's name\"]);\
        NewSButton('Delete', 'iab!role Delete $', true, 'Deletes a role.', ['$: The role to delete']);\
        NewSButton('Empty', 'iab!role empty', true, 'Returns a list of roles with no users.', [\"None\"]);\
        NewSButton('Selfassignadd', 'iab!role selfassignadd $', true, 'Adds a role to the self-assign pool.', [\"$: The role to add.\"]);\
        NewSButton('Selfassignremove', 'iab!role selfassignremove $', true, 'Removes a role from the self-assign pool.', [\"$: The role to remove.\"]);\
        NewSButton('Selfassign', 'iab!role selfassign $', false, 'Assigns a role from the self-assign pool to yourself.', [\"$: The role to assign.\"]);");
    //Spintext
    Button("iab!spintext", "\
        ExpandSubcommandsPanel();\
        ClearSubcommands();\
        SetSyntax('',false);\
        SetDescription('');\
        NewSButton('Create', 'iab!spintext create # T I', false, 'Creates a new spintext', ['#: The amount to zoom the camera (Optional, 0.66)', 'T: The text to create', 'I: Optional image attachment as texture']);\
        NewSButton('Delete', 'iab!spintext delete #', false, 'Deletes a spintext', ['#: The ID of the spintext (given by create)']);\
        NewSButton('Deleteall', 'iab!spintext deleteall', false, 'Deletes all of your spintexts', ['None.']);\
        NewSButton('Busy', 'iab!spintext busy', false, 'Returns whether or not blender is busy or disabled.', ['None.']);\
        NewSButton('Recall', 'iab!spintext recall #', false, 'Resends a spintext.', ['#: The ID of the spintext (given by create)']);");
    NewButton("iab!suggest", true, "iab!suggest S", false, "Writes a suggestion that persists if the bot restarts.", ["S: the suggestion."]);
    NewButton("iab!todec", true, "iab!todec H#", false, "Parses a hex number to decimal..", ["H#: The number (in hex, no prefix) to convert."]);
    //Vye
    Button("iab!vye", "\
        ExpandSubcommandsPanel();\
        ClearSubcommands();\
        SetSyntax('',false);\
        SetDescription('');\
        NewSButton('Accept', 'iab!vye accept', true, 'Sends an invite back to the bot dev. (For troubleshooting, etc.)', ['None.']);\
        NewSButton('Deny', 'iab!vye deny M', true, 'Denies an invite back to the bot dev, with an optional message.', ['M: A message to write to the console.']);");
            
}
