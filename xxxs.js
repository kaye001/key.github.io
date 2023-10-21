const textArray = [" ", "hi     ", "I am kaye ", "im 25 yo from Philippines",
"I like classical music sad songs", "and I love Vibing alone and self talk.", 
"before you DM me", "i want you to know some ", ". . . things!",
"     1", "I am not good at communicating ","“Hmmm” you will receive a lot from me", 
"     2", " I don't support LGBT",
"     3", "I treat others the way I want to be treated",
"     4", "im not a Snob :)",
 "Anyway . . . ","that's pretty much it.","Have a good day ladies", "and gentelmen!",
"Bye !","                 ", "              .  .  .", "Why you still here . . .",
"lol", "go", "bro go!!!", "you're wasting ur time","sigh . . .", "whatever", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1",
"hi     ", "I am kaye", "im 25 yo from Philippines", "I like classical music sad songs", "and I love Vibing alone and self talk.", "hmmmmm . . .",
"you still there?","i thought you...", "fell for it", ". . . fine", "anyway...", "imma go now","bye!","                      ",
"BRO", "BROOOO", "you wouldnt believe it", "i just...", "I JUST . . .", "DONT KNOW HOW TO", "MAKE YOU LEAVE", "anyway anyway",
"this time", "imma leave fr!", "have a good day", "this was fun!", "bye bye ( ˘▽˘)っ", "                                         ",
"do you like me?? JK Nyahaha",
];
let textIndex = 0;
let charIndex = 0;
const textElement = document.getElementById("typewriter-text");

function type() {
    if (charIndex < textArray[textIndex].length) {
        textElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 50); // Adjust typing speed here
    } else {
        setTimeout(erase, 1000); // Delay before erasing
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 3); // Adjust erasing speed here
    } else {
        textIndex = (textIndex + 1) % textArray.length; // Loop through textArray
        setTimeout(type, 500); // Delay before typing next text
    }
}

type(); // Start the typing animation when the page loads