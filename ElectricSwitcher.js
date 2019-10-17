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
    $("#SubcommandSelector").attr("style", "overflow-y:auto;width:0%;height:100%;background-color:#2c2f33;float:left;display:inline-block;text-align:center;margin:auto;");
    $("#panel").attr("style", "width:80%;height:100%;float:right;display:inline-block;margin:auto;");
}
function ExpandSubcommandsPanel() {
    $("#SubcommandSelector").attr("style", "overflow-y:auto;width:20%;height:100%;background-color:#2c2f33;float:left;display:inline-block;text-align:center;;margin:auto;");
    $("#panel").attr("style", "width:60%;height:100%;float:right;display:inline-block;margin:auto;");
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
    //butt.attr("style", "width:100%;height:2em;background-color:white;border:none;display:inline-block;text-align:center;text-decoration:none;");
    butt.attr("onclick", func);
    $("#SubcommandSelector").append(butt);
}
function PopulatePanel() {
    SetSyntax('',false);
    SetParameters(['']);
    SetDescription('I\'m sorry, but I can\'t use apostrophes in most of these command descriptions.');
    //50
    Button("iab!50", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!50', false);\
        SetDescription('Generates a 0 or 1.');\
        SetParameters([\"None\"])");
    //avatar
    Button("iab!avatar", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!avatar %', false);\
        SetDescription('Sends a users avatar.');\
        SetParameters([\"%: The user whose avatar is to be posted\"])");
    //Bruh
    Button("iab!bruh", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!bruh % R', false);\
        SetDescription('Issues a bruh certificate to a user.');\
        SetParameters([\"%: The user to bruh\", \"R: The reason for certification\"])");
    //CBT
    Button("iab!CBT", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!cbt', false);\
        SetDescription('CBT.');\
        SetParameters([\"None\"])");
    //Converts
    FButton("iab!convert", "convert.html");
    //Complain
    Button("iab!complain", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!complain \"',false);\
        SetParameters(['\" refers to the message to write to the console']);\
        SetDescription('Writes a message to the console.');");
    //Count
    Button("iab!count", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!count M', false);\
        SetDescription('Counts the length of a message');\
        SetParameters([\"M: The message to count\"])");
    //Die
    Button("iab!die", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!die #', true);\
        SetDescription('Deletes iab messages.');\
        SetParameters([\"#: The number of messages to process\"])");
    //Mur
    Button("iab!mur", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!mur % #', true);\
        SetDescription('Deletes targeted user messages.');\
        SetParameters([\"%: The user to target\", \"#: The number of messages to process\"])");
    //Sui
    Button("iab!sui", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!sui #', false);\
        SetDescription('Deletes your messages.');\
        SetParameters([\"#: The number of messages to process\"])");
    //Edge
    Button("iab!edge", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!edge {Unordered parameters}', false);\
        SetDescription('Generate an edgemap. These are the current defaults: bias 0, color FFFFFF, multiplier 1, radius 1, tolerance 30, alphamode 1. If there is no image linked or attached, iab will search up to 32 images above the command message to find an image to edgemap. There are three alpha modes: 0 means that if a pixel is an edge, its alpha channel will be 255, 1 uses the alpha of the iamge, and 2 uses the amount of difference between the pixels to determine its alpha.');\
        SetParameters([\"Image: The image to create an edgemap from. Can be linked, attached, or linked from MEGA with -mega (link)\", \"-bias #: Add or subtract this amount from the final alpha amounts.\", \"-color hex#: The color of the edgemap.\", \"-hue: Uses the color of the image instead of the color specified, if any.\", \"-multiplier #: Multiply the alpha value by this number (before bias)\", \"-radius #: Use this radius to search for edges.\", \"-tolerance #: The amount a channel must differ to be considered an edge.\", \"-alphamode #: The mode of alpha calculation to use. See the description.\"])");
    //Edgy
    Button("iab!edgy", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!edgy B T F', false);\
        SetDescription('Attempts to soften a poorly cut png. All parameters (except image lol) are optional');\
        SetParameters([\"Image: Attached only currently.\", \"B: lowers the alpha of non-opaque selected pixels by this amount.\", \"T: The tolerance (in shades of alpha) from the extremes to select pixels.\", \"F: Feather the alpha by this many pixels.\"])");
    //Gencol
    Button("iab!gencol", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!gencol R G B', false);\
        SetDescription('Generates a small image of a solid color.');\
        SetParameters([\"R: Red channel value\", \"G: Green channel value\", \"B: Blue channel value\"])");
    //Gensslink
    Button("iab!gensslink", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!gensslink', false);\
        SetDescription('Generates a share-screens link for your currently connected voice chat.');\
        SetParameters([\"None\"])");
    //Inactives
    Button("iab!inactives", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!inactives D T', true);\
        SetDescription('Gets a list of users that have not sent messages recently. I am notified when you start an inactives count.');\
        SetParameters([\"D: How many days to consider recent (7 = one week ago is still recent)\", \"T: Number of messages to go through per channel (2000 max)\"])");
    //Info
    Button("iab!info", "\
        ExpandSubcommandsPanel();\
        ClearSubcommands();\
        SetSyntax('',false);\
        SetDescription('');\
        SButton('Emote','\
            SetSyntax(\"iab!info emote [-ec]\", false);\
            SetDescription(\"Sends info about emotes. If -ec is specified, iab will try to make the output smaller by not including emote names or newlines.\");\
            SetParameters([\"None\"])');\
        SButton('Invite','\
            SetSyntax(\"iab!info invite [-ic]\",false);\
            SetDescription(\"Lists all invites in a server. If -ic is specified, iab will use smaller field names.\");\
            SetParameters([\"None\"]);');\
        SButton('Guild','\
            SetSyntax(\"iab!info guild\",false);\
            SetDescription(\"Sends basic and general information about the server.\");\
            SetParameters([\"None\"]);');\
        SButton('General','\
            SetSyntax(\"iab!info general\",false);\
            SetDescription(\"Equivalent to iab!info guild, iab!info emote, and iab!info invite. -ec and -ic are passed on to their respective commands.\");\
            SetParameters([\"None\"]);');\
        SButton('User','\
            SetSyntax(\"iab!info user %\",false);\
            SetDescription(\"Lists information about a user.\");\
            SetParameters([\"%: The user to examine\"]);');");
    //Invite
    Button("iab!invite", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!invite', false);\
        SetDescription('Shh! This command is a trap for those who do not know that iabinv is the real invite command...');\
        SetParameters([\"None\"])");
    //Knows
    FButton("iab!knows", "knows.html");
    
    //Nut
    Button("iab!nut", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!nut', false);\
        SetDescription('nut.');\
        SetParameters([\"None\"])");
    //Permissions
    Button("iab!permissions", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!permissions %', false);\
        SetDescription('Sends a permissions image for a user');\
        SetParameters([\"%: The user to target, optional. If none is supplied, it uses your user.\"])");
    //Ping
    Button("iab!ping", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!ping', false);\
        SetDescription('Ping iab.');\
        SetParameters([\"None\"])");
    //Planned
    Button("iab!planned", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!planned', false);\
        SetDescription('See what I am plotting<a href=\"planned.html\"> here</a>');\
        SetParameters([\"None\"])");
    //Plus
    Button("iab!plus", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!plus', false);\
        SetDescription('The eventual premium tier of iab, currently unimplemented');\
        SetParameters([\"None\"])");
    //Remind
    Button("iab!remind", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!remind # T', false);\
        SetDescription('Remind yourself after a certain amount of time (This is lost if iab is restarted.)');\
        SetParameters([\"#: The number of seconds to wait\", \"T: The text to send you\"])");
    //Rex
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
        SButton('Assign','\
            SetSyntax(\"iab!role assign % $\",true);\
            SetDescription(\"Assigns a role to a user\");\
            SetParameters([\"%: The user to target\", \"$: The role to assign\"])');\
        SButton('Assignall','\
            SetSyntax(\"iab!role assignall $\",true);\
            SetDescription(\"Assigns a role to every user\");\
            SetParameters([\"$: The role to assign\"]);');\
        SButton('Unassign','\
            SetSyntax(\"iab!role unassign % $\",true);\
            SetDescription(\"Unassigns a role from a user\");\
            SetParameters([\"%: The user to target\",\"$: The role to unassign\"]);');\
        SButton('Unassignall','\
            SetSyntax(\"iab!role unassignall $\", true);\
            SetDescription(\"Unassigns a role from every user. Internally, this deletes the role and recreates it in-place, so be careful.\");\
            SetParameters([\"$: The role to unassign\"]);');\
        SButton('Create','\
            SetSyntax(\"iab!role create #  N \",true);\
            SetDescription(\"Creates a role with a given name and color\");\
            SetParameters([\"#: The color for the role (optional)\", \"N: The name of the role\"]);');\
        SButton('Delete','\
            SetSyntax(\"iab!role delete $\",true);\
            SetDescription(\"Deletes a role.\");\
            SetParameters([\"$: The role to delete\"]);');\
        SButton('Empty','\
            SetSyntax(\"iab!role empty\",true);\
            SetDescription(\"Shows roles with no users.\");\
            SetParameters([\"None\"]);');\
        SButton('Selfassignadd','\
            SetSyntax(\"iab!role selfassignadd $\",true);\
            SetDescription(\"Adds a role to the self-assign pool.\");\
            SetParameters([\"$: The role to add.\"]);');\
        SButton('Selfassignremove','\
            SetSyntax(\"iab!role selfassignremove $\",true);\
            SetDescription(\"Removes a role from the self-assign pool.\");\
            SetParameters([\"$: The role to remove\"]);');\
        SButton('Selfassign','\
            SetSyntax(\"iab!role selfassign $\",false);\
            SetDescription(\"Assigns a role to yourself.\");\
            SetParameters([\"$: The role to assign\"]);');\
        ");
    //Spintext
    Button("iab!spintext", "\
        ExpandSubcommandsPanel();\
        ClearSubcommands();\
        SetSyntax('',false);\
        SetDescription('');\
        SButton('Create','\
            SetSyntax(\"iab!spintext create # T I\",false);\
            SetDescription(\"Creates a new spintext\");\
            SetParameters([\"#: An optional decimal number that represents the zoom for the spintext\", \"T: The text to generate\", \"I: an optional image attachment to use as a texture.\"])');\
        SButton('Delete','\
            SetSyntax(\"iab!spintext delete #\",false);\
            SetDescription(\"Deletes a spintext\");\
            SetParameters([\"#: The spintext to delete\"]);');\
        SButton('Deleteall','\
            SetSyntax(\"iab!spintext deleteall\",false);\
            SetDescription(\"Deletes all of your spintexts\");\
            SetParameters([\"None\"]);');\
        SButton('Busy','\
            SetSyntax(\"iab!spintext busy\",false);\
            SetDescription(\"Will tell you if blender is disabled or busy.\");\
            SetParameters([\"None\"]);');\
        SButton('List','\
            SetSyntax(\"iab!spintext list [all]\",false);\
            SetDescription(\"Lists your runtime extensions, or everyones if [all] was specified.\");\
            SetParameters([\"None\"]);');\
        ");
    //Suggest
    Button("iab!suggest", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!suggest T', false);\
        SetDescription('Write a suggestion that persists if I restart the bot.');\
        SetParameters([\"T: The text of the suggestion.\"])");
    //Todec
    Button("iab!todec", "\
        CollapseSubcommandsPanel();\
        SetSyntax('iab!todec #', false);\
        SetDescription('Converts a hex number to decimal.');\
        SetParameters([\"#: The hex number to convert\"])");
    //Vye
    Button("iab!vye", "\
        ExpandSubcommandsPanel();\
        ClearSubcommands();\
        SetSyntax('',false);\
        SetDescription('');\
        SButton('Accept','\
            SetSyntax(\"iab!vye accept\", true);\
            SetDescription(\"Sends an invite back to the bot dev.\");\
            SetParameters([\"None\"])');\
        SButton('Deny','\
            SetSyntax(\"iab!vye deny M\",true);\
            SetDescription(\"Denies an invite to be sent to the bot dev, with an optional message M.\");\
            SetParameters([\"None\"]);');\
        ");
            
}
