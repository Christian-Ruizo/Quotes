const quoteContainer = document.getElementById("quote-container");

const quoteText = document.getElementById("quote");

const authorText = document.getElementById("author");

const twitterBtn = document.getElementById("twitter");

const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick Random Quotes from APi Quotes
  const quote = apiQuotes [Math.floor(Math.random() * apiQuotes.length)]
  console.log(quote)
  authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
}
newQuoteBtn.addEventListener("click", function () {
  getQuotes();
})

twitterBtn.addEventListener("click", function() {
  window.open("https://twitter.com/intent/tweet?text=" +  quoteText.textContent+ " ~ by " + authorText.textContent, "Tweet Window", "width=600", "height=300")
})

// ON load
getQuotes();

