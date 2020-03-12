function PopulateHyperPanel() {
    CollapseSubcommandsPanel();
    SetSyntax('',false);
    SetParameters(['I wonder if I should use this space for a changelog']);
    SetDescription('JavaScript gang.');
    Button("color", "\
    ExpandSubcommandsPanel();\
    ClearPanel();\
    NewSButton('named', 'iab!hyper color named', false, 'Generates a random named color (Taken from a many large naming conventions)', ['None']);\
    NewSButton('random', 'iab!hyper color random', false, 'Generates a random color', ['None']);");
    NewButton("name", true, "iab!hyper name", false, "Generates a random name", ["-gm (true/false): Generate a middle name. Default false", "-gs (true/false): Generate a surname Default true", "-sn (#): Syllables in the first name (defaults to 2-4, setting this to anything but 0 results in exactly that number of syllables)", "-sm: Exactly the same as -sn, but for the middle name", "-ss: Exactly the same as -sn, but for the surname"]);
    NewButton("number", true, "iab!hyper number", false, "Generates a random number between two bounds. I'm going to be real with you, this just internally calls iab!random with your parameters :p", ["-low (#): The lowest bound of the number", "-high (#): The highest bound of the number"]);
    /*Button("cp;pr", "\
        ExpandSubcommandsPanel();\
        ClearPanel();\
        NewSButton('Accept', 'iab!vye accept', true, 'Sends an invite back to the bot dev. (For troubleshooting, etc.)', ['None.']);\
        NewSButton('Deny', 'iab!vye deny M', true, 'Denies an invite back to the bot dev, with an optional message.', ['M: A message to write to the console.']);");
            */
}
