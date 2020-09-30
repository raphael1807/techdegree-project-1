/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quotes = [{
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "Albert Einstein",
        tag: "Philosophy"
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        source: "Dr. Seuss"
    },
    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        source: "J.K. Rowling",
        citation: "Harry Potter and the Goblet of Fire"
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        source: "Eleanor Roosevelt, This is My Story"
    },
    {
        quote: "Change will not come if we wait for some other person or if we wait for some other time. We are the ones we've been waiting for. We are the change that we seek",
        source: "President Obama",
        year: "2008 Campaign speech"
    }
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote(array) {
    // Calculate a random number to insert into the value of the array
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
}

/***
 * `printQuote` function
 ***/

function printQuote() {
    // Create a variable to store a random quote object from the getRandomQuote() function.
    const chosenQuote = getRandomQuote(quotes);

    // Create another variable to store the HTML string.
    const quoteBasics = `${chosenQuote.quote}</p> <p class="source">${chosenQuote.source}`;
    let quoteExtra = ``;
    let finalQuote = ``;

    //Check if chosenQuote has a year, citation, or tag
    if (chosenQuote.year) {
        quoteExtra = `<span class="year"> ${chosenQuote.year} </span></p>`;
    }
    if (chosenQuote.tag) {
        quoteExtra = `<span class="year"> ${chosenQuote.tag} </span>`;
    }
    if (chosenQuote.citation) {
        quoteExtra = `<span class="year"> ${chosenQuote.citation} </span>`;
    }

    // Create the final HTML string
    finalQuote = `<p class="quote">${quoteBasics} ${quoteExtra}</p>`

    // Print to html
    document.getElementById("quote-box").innerHTML = finalQuote;
}

// function that updates a random color at to the background.
// code adapted from  https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
function random_background_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var backgroundColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = backgroundColor;
}

// setInterval function to change quote and background color
// Help setting up found at https://www.bitdegree.org/learn/best-code-editor/gExWlP0H
setInterval(() => {
    printQuote();
    random_background_color();
}, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

// click event listener to change the background color
document.getElementById('load-quote').addEventListener("click", random_background_color, false);