/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

/*** 
 * Quotes Array 
 * This is an array of quotations for various authors.
***/

const quotes = [
  {quote:'The truth is rarely pure and never simple.', 
  source: 'Oscar Wilde',
  citation: 'The Importance of Being Earnest',
  year: 1895},
  {quote:'You can have tons of talent, but it won\'t necessarily keep you fed. If you have sharp instincts, through, you\'ll never go hungry.', 
  source: 'Haruki Murakami',
  citation: '1Q84',
  year: 2009},
  {quote:'It\'s better to have something to remember than anything to regret.', 
  source: 'Frank Zappa',
  citation: 'The Real Frank Zappa Book',
  year: 1990},
  {quote:'There is no greater agony than bearing an untold story inside you.', 
  source: 'Maya Angelou',
  citation: 'I Know Why The Caged Bird Sings',
  year: 1969},
  {quote:'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.', 
  source: 'Neil Gaiman',
  citation: 'Coraline',
  year: 2002},
];



/***
 * getRandomQuote Function
 * This function grabs a random quote from the Quotes array.
***/
function getRandomQuote() {
  const randomNumber = quotes[Math.floor(Math.random() * quotes.length)];
  return randomNumber;
};




/***
 * printQuote Function
 * This function generates a new quote to display based upon the random quote provided by the getRandomQuote function.
***/
function printQuote() {
  const randomQuote = getRandomQuote();
  let quotation = `<p class="quote">${randomQuote.quote}</p> <p class="source">${randomQuote.source}`;
  if (randomQuote.citation){
    quotation += `<span class="citation">${randomQuote.citation}</span>`;
  }; 
  if (randomQuote.year) {
    quotation += `<span class="year">${randomQuote.year}</span>`;
  };
  quotation += "</p>";
  //console.log(quotation);
  return document.getElementById('quote-box').innerHTML = quotation; 
};


/***
 * Loads a new quote to display on-click using printQuote function.
 * This line was provided by Treehouse.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
