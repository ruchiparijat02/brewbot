// ============================================================
//  script.js  —  how the chat works (read-only for the session)
// ============================================================

const messagesEl = document.getElementById("messages");
const formEl = document.getElementById("chat-form");
const inputEl = document.getElementById("chat-input");
const suggestionsEl = document.getElementById("suggestions");

document.getElementById("version").textContent = APP_VERSION;

// Show one message bubble on screen
function addMessage(text, sender) {
  const bubble = document.createElement("div");
  bubble.className = `msg msg--${sender}`;
  bubble.textContent = text;
  messagesEl.appendChild(bubble);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

// Find the best answer: first block whose keyword appears in the message
function findAnswer(userText) {
  const text = userText.toLowerCase();
  for (const item of RESPONSES) {
    const hit = item.keywords.some((word) =>
      new RegExp(`\\b${word.toLowerCase()}\\b`).test(text)
    );
    if (hit) return item.answer;
  }
  return FALLBACK_ANSWER;
}

// User sends a message -> show it -> bot "types" -> bot replies
function handleUserMessage(text) {
  const clean = text.trim();
  if (!clean) return;
  addMessage(clean, "user");
  inputEl.value = "";

  const typing = document.createElement("div");
  typing.className = "msg msg--bot msg--typing";
  typing.textContent = "typing…";
  messagesEl.appendChild(typing);

  setTimeout(() => {
    typing.remove();
    addMessage(findAnswer(clean), "bot");
  }, 600);
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  handleUserMessage(inputEl.value);
});

// Quick-reply buttons
SUGGESTIONS.forEach((label) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = label;
  btn.addEventListener("click", () => handleUserMessage(label));
  suggestionsEl.appendChild(btn);
});

addMessage(BOT_GREETING, "bot");
