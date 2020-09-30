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
        tag: "philosophy"
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
    let chosenQuote = getRandomQuote(quotes);

    // Create another variable to store the HTML string.
    let codeBlock = `<p class="quote">${chosenQuote.quote}</p> <p class="source">${chosenQuote.source}`;

    //Check if chosenQuote has a year, citation, or tag
    if (chosenQuote.year) {
        codeBlock = `${codeBlock} <span class="year"> ${chosenQuote.year} </span>`;
    }
    if (chosenQuote.tag) {
        codeBlock = `${codeBlock} <span class="year"> ${chosenQuote.year} </span>`;
    }
    if (chosenQuote.citation) {
        codeBlock = `${codeBlock} <span class="year"> ${chosenQuote.year} </span>`;
    }

    let finalCodeBlock = codeBlock.push('</p>');



    //Print to html
    document.getElementById("quote-box").innerHTML = finalCodeBlock;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);