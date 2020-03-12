var SubcommandsSelectorWidth = 15;
function SetParameters(arrayParams) {
    var params = $("#parameters"), paramsName = $("<p>");
    params.empty();
    paramsName.text("PARAMETERS");
    paramsName.attr("style", "font-size:12pt");
    params.append(paramsName);
    var ParamsHeight = 0;
    arrayParams.forEach(function (item, index) {
        var pars = $("<p>");
        pars.html(item);
        params.append(pars);
        ParamsHeight += 5;
    });
    params.attr("style", "width:100%;height:" + String(ParamsHeight) + "%;display:inline-block");
}
function CollapseSubcommandsPanel() {
    $("#SubcommandSelector").attr("style", "width:0%;border-radius:25px;overflow-x:hidden;line-height:98%;");
    $("#panel").attr("style", "width:74%;float:right;margin-right:5%");
}
function ExpandSubcommandsPanel() {
    $("#SubcommandSelector").attr("style", "width:" + SubcommandsSelectorWidth + "%;border-radius:25px;overflow-x:hidden;line-height:98%;");
    $("#panel").attr("style", "width:" + (74 - SubcommandsSelectorWidth) + "%;float:right;margin-right:5%");
}
function ClearSubcommands() {
    $("#SubcommandSelector").empty();
    var par = $("<h4>");
    par.text("Subcommands");
    par.attr("style","line-height:30%;font-size:75%;margin-top:16px;margin-bottom:8px;font-weight:bold");
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
    var aA = $("<a>"), butt = $("<button>"), but = $("<div>"), p = $("<p>");
    aA.attr("href", func);
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
function ClearPanel() {
    ClearSubcommands();
    SetSyntax('',false);
    SetDescription('');
    SetParameters(['']);
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
    NewButton("iab!avatar", true, 'iab!avatar %', false, "Sends a user\'s avatar.", ["%: The user whose avatar should be sent."]);
    NewButton("iab!allow", true, "iab!allow % P (or iab!unprohibit % P if you hate yourself)", true, "Reallows a user to use a command.", ["%: The user to allow. Use 0 or * to deny everyone.", "P: The permission to deny. This should be the content after the prefix: \'nut\', not \'iab!nut\'"]);
    NewButton("iab!bruh", true, 'iab!bruh % R', false, "Issues a bruh certificate to a user.", ["%: The bruh boi", "R: Reason for certification"]);
    NewButton("iab!codeformatting", true, "iab!codeformatting", false, "Formats code, either minifying or prettifying it.", ["-minify: Minify the code, erasing all extraneous whitespace.","-prettify: Prettify the code, automatically indenting it, writing one statement per line, etc.","-engine <engine>: Defines which engine to use. Valid values: csharp", "-filename X: Will name the result file to this. Do not include the file extension.", "-content X: Used to denote the data to minify/prettify."]);
    FButton  ("iab!convert", "convert.html");
    NewButton("iab!complain", true, "iab!complain M", false, "Writes a message to the console.", ["M: The message to write to the console."]);
    NewButton("iab!count", true, "iab!count M", false, "Counts the length of a message.", ["M: The message to count."]);
    Button   ("iab!del", "\
        ExpandSubcommandsPanel();\
        ClearPanel();\
        NewSButton('self', 'iab!del self #', false, 'Deletes your own messages.', ['#: The number of messages to check.']);\
        NewSButton('iab', 'iab!del iab #', true, 'Deletes iab messages (requires Manage Messages).', ['#: The number of messages to check.']);\
        NewSButton('channel', 'iab!del channel # / iab!del c #', true, 'Deletes messages from a channel (requires Manage Messages).', ['#: The number of messages to delete.']);\
        NewSButton('user', 'iab!del user <user> #', true, 'Deletes messages from a user (requires Manage Messages).', ['#: The number of messages to check.']);");
    
	NewButton("iab!edgy", true, "iab!edgy B T F", false, "Attempts to soften a poorly cut png. All parameters are optional (except image lol)", ["B: Lowers the alpha of selected pixels by this amount.", "The amount the alpha channel must differ from the extremes to be selected (so 16 would be alpha values 16 - 239).", "F: The range, in pixels, to feather the alpha values."]);
    FButton("iab!filter", "filter.html");
    NewButton("iab!gencol", true, "iab!gencol R G B (or iab!generatecolor R G B)", false, "Generates a small image of a specified color. I'm not writing the parameters because they're obvious. Fight me.", ["arr gee bee"]);
    NewButton("iab!getannouncements", true, "iab!getannouncements true/false", true, "Updates your guild's preference to recieve announcements", ["true / false"]);
    NewButton("iab!gensslink", true, "iab!gensslink", false, "Generates a link that users can click to share screens.", ["None"]);
    FButton  ("iab!hyper", "hyper.html");
    NewButton("iab!inactives", true, "iab!inactives D T", true, "Gives a list of users that haven't sent messages recently.", ["D: The amount of days in the past to consider 'recent'.", "T: The number of messages to go through (Max 2000)"]);
    Button   ("iab!info", "\
        ExpandSubcommandsPanel();\
        ClearPanel();\
        NewSButton('Emote', 'iab!info emote [-ec]', false, 'Sends info about emotes. If -ec is specified, iab will make the output smaller.', ['None']);\
        NewSButton('Invite', 'iab!info invite [-ic]', false, 'Sends info about invites. If -ic is specified, iab will use shorter field names.', ['None']);\
        NewSButton('Guild', 'iab!info guild', false, 'Sends general information about the server.', ['None']);\
        NewSButton('General', 'iab!info general [-ic] [-ec]', false, 'Equivalent to iab!info guild, iab!info emote, and iab!info invite. -ec and -ic are passed to their respective commands.', ['None']);\
        NewSButton('User', 'iab!info user %', false, 'Lists information about a user.', ['%: The user to examine.']);");
    FButton  ("iab!knows", "knows.html");
    FButton  ("iab!licenses", "licenses.html");
    NewButton("iab!permissions", true, "iab!permissions %", false, "Sends a flashy image containing a user's permissions. A red name means that the user has Change Nickname.", ["%: The user to examine."]);
    NewButton("iab!phone", true, "iab!phone", false, "Starts or stops a connection to another server who's also running iab!phone.", ["None."]);
    NewButton("iab!plus", true, "iab!plus", false, "uwu", ["None."]);
    NewButton("iab!prohibit", true, "iab!prohibit % P", true, "Stops a user from using a certain command.", ["%: The user to deny. Use 0 or * to deny everyone.", "P: The permission to deny. This should be the content after the prefix: \'nut\', not \'iab!nut\'"]);
    NewButton("iab!prohibitions", true, "iab!prohibitions", true, "Returns a text file that details all the prohibitions in a server.", ["None."]);
    NewButton("iab!random", true, "iab!random [Unordered Parameters]", false, "iab will generate a random number", ["-low: The low bound of the random number.", "-high: The high bound of the random number."]);
    NewButton("iab!remind", true, "iab!remind # T", false, "iab will remind you about something (This is currently lost if iab is restarted.)", ["#: The number of seconds to wait before sending the reminder.", "T: The message to send."]);
    Button("iab!rex", "\
        ExpandSubcommandsPanel();\
        ClearPanel();\
        SetDescription('Runtime extensions are a way to add commands to iab while it is running. Runtime extensions can be used by using the prefix rex! instead of iab!. Whoever made the runtime extension must also be in the server for it to work.');\
        NewSButton('Create', 'iab!rex create T R', false, 'Create a new runtime extension.', ['T: The trigger for the function', 'R: The response for the function']);\
        NewSButton('Delete', 'iab!rex delete T', false, 'Deletes a runtime extension.', ['T: The trigger for the function']);\
        NewSButton('Deleteall', 'iab!rex deleteall', false, 'Deletes all of your runtime extensions.', ['None.']);\
        NewSButton('List', 'iab!rex list [all]', false, 'Lists all of your runtime extensions, or the runtime extensions of everyone in the server if [all] is specified.', ['None.']);");
    //Role
    Button("iab!role", "\
        ExpandSubcommandsPanel();\
        ClearPanel();\
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
        ClearPanel();\
        NewSButton('Create', 'iab!spintext create # T I', false, 'Creates a new spintext', ['#: The amount to zoom the camera (Optional, 0.66)', 'T: The text to create', 'I: Optional image attachment as texture']);\
        NewSButton('Delete', 'iab!spintext delete #', false, 'Deletes a spintext', ['#: The ID of the spintext (given by create)']);\
        NewSButton('Deleteall', 'iab!spintext deleteall', false, 'Deletes all of your spintexts', ['None.']);\
        NewSButton('Busy', 'iab!spintext busy', false, 'Returns whether or not blender is busy or disabled.', ['None.']);\
        NewSButton('Recall', 'iab!spintext recall #', false, 'Resends a spintext.', ['#: The ID of the spintext (given by create)']);");
    FButton("iab!standardrules", "standardrules.html");
    NewButton("iab!suggest", true, "iab!suggest S", false, "Writes a suggestion that persists if the bot restarts.", ["S: the suggestion."]);
    NewButton("iab!todec", true, "iab!todec H#", false, "Parses a hex number to decimal..", ["H#: The number (in hex, no prefix) to convert."]);
    //Vye
    Button("iab!vye", "\
        ExpandSubcommandsPanel();\
        ClearPanel();\
        NewSButton('Accept', 'iab!vye accept', true, 'Sends an invite back to the bot dev. (For troubleshooting, etc.)', ['None.']);\
        NewSButton('Deny', 'iab!vye deny M', true, 'Denies an invite back to the bot dev, with an optional message.', ['M: A message to write to the console.']);");
	Button("cii!", "\
        ExpandSubcommandsPanel();\
        ClearPanel();\
        SetDescription('cii! is used to manage interactions with the cII Interface (cIII, if you prefer). ALL CII COMMANDS ARE DONE IN DMS WITH THE BOT. THEY WILL NOT BE HANDLED IN GUILD CHATS. THIS IS TO PROTECT YOUR ACCOUNT CREDENTIALS.');\
        NewSButton('register', 'cii!register -username username -password password -email email', false, 'Creates a new cII user account. Make sure to use a real email; You have to verify it to get the benefits. I wont spam you.', ['-username: your desired username. It must be unique.', '-password: Your desired password.', '-email: The email to use. It must be unique.']);\
        NewSButton('verify', 'cii!verify -email email, -code c', false, 'Verifies your cII account.', ['-email: the email you signed up with.', '-code: the code you recieved in the email.']);\
        NewSButton('verified', 'cii!verified -username user', false, 'Checks if your account is verified', ['-username: your username.']);\
        NewSButton('binddiscord', 'cii!binddiscord -username user -password password', false, 'Binds your Discord user to your cII account, allowing you to interact with cII. Your account must be verified.', ['-username: your username.', '-password: your password.']);");
    
            
}
