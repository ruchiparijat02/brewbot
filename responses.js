// ============================================================
//  responses.js  —  THE BOT'S BRAIN (no coding knowledge needed)
// ============================================================
//  Each block below is one thing the bot knows.
//   - keywords : words to look for in the user's message
//   - answer   : what the bot replies
//
//  To teach the bot something new, copy one block, paste it
//  at the end of the list, and change the keywords + answer.
//  Don't forget the comma between blocks!
// ============================================================


const APP_VERSION = "v1.1"; // bump this every time you release

const BOT_GREETING =
  "Hi! I'm BrewBot ☕ Ask me about our menu, timings, location, wifi or offers.";

const FALLBACK_ANSWER =
  "Hmm, I'm not sure about that yet. Try asking about menu, timings, location, wifi or offers!";

const SUGGESTIONS = ["Menu", "Timings", "Location", "Wifi", "Offers", "Parking"];

const RESPONSES = [
  {
    keywords: ["hi", "hello", "hey"],
    answer: "Hello! 👋 What can I help you with today?",
  },
  {
    keywords: ["menu", "coffee", "drink", "food", "eat"],
    answer:
      "We serve Cappuccino (₹180), Cold Brew (₹220), Masala Chai (₹90) and fresh croissants (₹150).",
  },
  {
    keywords: ["timing", "timings", "open", "close", "hours"],
    answer: "We're open every day from 8 AM to 10 PM.",
  },
  {
    keywords: ["location", "address", "where"],
    answer: "Find us at 12, MG Road, Gurugram — next to the metro station.",
  },
  {
    keywords: ["wifi", "wi-fi", "internet", "password"],
    answer: "Free wifi! Network: BrewAndByte · Password: coffee123",
  },
  {
    keywords: ["offer", "offers", "discount", "deal"],
    answer: "Happy hours: 20% off all cold drinks, 3 PM – 5 PM on weekdays.",
  },
  {
    keywords: ["thanks", "thank you", "bye"],
    answer: "Anytime! Have a great day ☕",
  },
  {
    keywords: ["parking", "park", "car"],
    answer: "Yes! Free parking for 20 cars behind the café.",
  },
];
