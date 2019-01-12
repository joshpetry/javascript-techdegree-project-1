/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

//Array of quote objects
var quotes = [
    {
        //Scenerio #1: citation and year exist - works
        quote: "If you can dream it, you can do it.", 
        source: "Walt Disney", 
        citation: "Success.com",
        year: "1980"
    },
    {
        //Scenerio #2: only citation exists - works
        quote: "Do not wait; the time will never be ‘just right.’ Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.", 
        source: "George Herbert", 
        citation: "Success.com"
    },
    {
        quote: "There will be obstacles. There will be doubters. There will be mistakes. But with hard work, there are no limits.",
        source: "George Herbert", 
        //citation: "Success.com",
    },
    {
        //Scenerio #4: neither citation nor year exist  - works 
        quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
        source: "C.S. Lewis", 
        //citation: "MotivationPing.com"
    },
    {
        //Scenerio #3: only year exists - works
        quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
        source: "Vince Lombardi", 
        //citation: "MotivationPing.com"
        year: "1961"
    }
];

//Function to generate a random quote object
function getRandomQuote() {
    return quotes[Math.floor((Math.random() * 5))];
}

//Function to generate quote string and randomly display different quotes
function printQuote() {
    var randomQuote = getRandomQuote();
    var printedQuote = "<p class=\"quote\">" + randomQuote.quote + "</p>";
    printedQuote += "<p class=\"source\">" + randomQuote.source;
    
    //Scenerio #1: citation and year exist
    if (randomQuote.citation !== undefined && randomQuote.year !== undefined) {
        printedQuote += "<span class=\"citation\">" + randomQuote.citation + "</span>" 
        printedQuote += "<span class=\"year\">" + randomQuote.year + "</span></p>" 
    //Scenerio #2: only citation exists
    } else if (randomQuote.citation !== undefined)  {
    printedQuote += "<span class=\"citation\">" + randomQuote.citation+ "</span></p>" 
    //Scenerio #3: only year exists
    } else if (randomQuote.year !== undefined)  {
        printedQuote += "<span class=\"year\">" + randomQuote.year + "</span></p>" 
    //Scenerio #4: neither citation nor year exist   
    } else {
        printedQuote += "</p>";
    }
    
    //Replace HTML in #quote-box with printedQuote string
    document.getElementById("quote-box").innerHTML = printedQuote;
}

//Call printQuote function on button clikc
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
