const quote = document.querySelector(".quote_message");
const quoteAuthor = document.querySelector(".quote_author");
const quoteButton = document.querySelector(".quote_btn");

// Quote data
const quotes = [
  {
    id: 1,
    title:
      "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
  },
  {
    id: 2,
    title:
      "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    author: "Mary Kay Ash",
  },
  {
    id: 3,
    title: "It’s hard to beat a person who never gives up.",
    author: "Babe Ruth",
  },
  {
    id: 4,
    title:
      "You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.",
    author: "William W. Purkey",
  },
  {
    id: 5,
    title: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    id: 6,
    title:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama XIV",
  },
  {
    id: 7,
    title:
      "The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.",
    author: "Unknown",
  },
  {
    id: 8,
    title: "Impossible is just an opinion.",
    author: "Paulo Coelho",
  },
  {
    id: 9,
    title: "Your passion is waiting for your courage to catch up.",
    author: "Isabelle Lafleche",
  },
  {
    id: 10,
    title:
      "People who wonder if the glass is half empty or full miss the point. The glass is refillable.",
    author: "Unknown",
  },
];

// random quote generate function
const getRandomQuote = () => {
  // get random quote from array
  let quoteCopy = quotes;
  let randomQuote = Math.floor(Math.random() * quoteCopy.length);

  // output result to UI
  quote.innerHTML = quoteCopy[randomQuote].title;
  quoteAuthor.innerHTML = `~ ${quoteCopy[randomQuote].author}`;
};
quoteButton.addEventListener("click", getRandomQuote);
