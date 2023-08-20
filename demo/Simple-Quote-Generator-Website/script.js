const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is really simple, but we insist on making it complicated. - Confucius",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
];

const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
});
