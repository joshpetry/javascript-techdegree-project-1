/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

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
        citation: "Success.com",
    },
    {
        //Scenerio #4: neither citation nor year exist  - works 
        quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
        source: "C.S. Lewis", 
    },
    {
        //Scenerio #3: only year exists - works
        quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
        source: "Vince Lombardi", 
        year: "1961"
    }
];

//Declare global timer variable and timerFunction
var timer1;
function timerFunction() {
    printQuote();
}

//random color function from StackOverflow - https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Function to generate a random quote object
function getRandomQuote() {
    return quotes[Math.floor((Math.random() * 5))];
}

//Function to generate quote string and randomly display different quotes
function printQuote() {
    //clear timer at start of function
    clearTimeout(timer1);
    
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
    
    //Change background color when quote changes
    document.body.style.backgroundColor = getRandomColor();
    
    //start timer at end of function
    timer1 = setTimeout(timerFunction, 5000)
}

//Call printQuote function on button click
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
