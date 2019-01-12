/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.   
***/

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


/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

function getRandomQuote() {
    return Math.floor((Math.random() * 5));
}

/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
    var randomQuote = getRandomQuote();
    var printedQuote = "<p class=\"quote\">" + quotes[randomQuote].quote + "</p>";
    printedQuote += "<p class=\"source\">" + quotes[randomQuote].source;
    
    //Scenerio #1: citation and year exist
    if (quotes[randomQuote].citation !== undefined && quotes[randomQuote].year !== undefined) {
        printedQuote += "<span class=\"citation\">" + quotes[randomQuote].citation + "</span>" 
        printedQuote += "<span class=\"year\">" + quotes[randomQuote].year + "</span></p>" 
    
    //Scenerio #2: only citation exists
    } else if (quotes[randomQuote].citation !== undefined)  {
    printedQuote += "<span class=\"citation\">" + quotes[randomQuote].citation+ "</span></p>" 
    
    //Scenerio #3: only year exists
    } else if (quotes[randomQuote].year !== undefined)  {
        printedQuote += "<span class=\"year\">" + quotes[randomQuote].year + "</span></p>" 
        
    //Scenerio #4: neither citation nor year exist   
    } else {
        printedQuote += "</p>";
    }
    return printedQuote;
}

/*
      <p class="quote">Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>
      <p class="source">Patrick McKenzie<span class="citation">Twitter</span><span class="year">2016</span></p>
*/

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.