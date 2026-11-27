# ☕ BrewBot — a tiny café chatbot

A simple rule-based chatbot for a café, built with plain HTML, CSS and JavaScript.
No frameworks, no API keys, no install step — open `index.html` and it works.

Used in the **"From IDE to Production"** session: edit → commit → push → auto-deploy.

## What it does
- Answers questions about the menu, timings, location, wifi and offers
- Quick-reply buttons for common questions
- Shows the app version in the footer (so you can see when a new release goes live)

## Project files
| File | What it is | Safe to edit in the session? |
|---|---|---|
| `index.html` | Page structure (header, chat box, input) | ✅ bot name / tagline |
| `responses.js` | The bot's "brain" — keywords and answers | ✅ main place to edit |
| `style.css` | Colours and layout | ✅ change `--brand` colour |
| `script.js` | Chat logic | 👀 read only |
| `netlify.toml` | Deployment settings for Netlify | 👀 read only |
| `.gitignore` | Files Git should ignore | 👀 read only |

## Run it locally
Open `index.html` in your browser. Or, in VS Code, install the **Live Server** extension and click **Go Live**.

## The everyday workflow
```bash
git checkout -b feature/add-parking-faq   # 1. new branch for your change
# ...edit files in VS Code...
git status                                # 2. see what changed
git add .                                 # 3. stage the changes
git commit -m "Add parking FAQ to BrewBot" # 4. save a snapshot
git push -u origin feature/add-parking-faq # 5. send to GitHub
# 6. open a Pull Request on GitHub → review → Merge into main
# 7. Netlify sees the new commit on main and deploys automatically
```

## Deploy
Connected to Netlify: every push/merge to `main` goes live in under a minute.
Pull Requests get their own **Deploy Preview** link for testing before merging.

## Changelog
- **v1.0** — First release: menu, timings, location, wifi, offers
