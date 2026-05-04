# Challenge: Level Up Your Codespace Environment

Welcome to the next level of your development journey!

In previous lessons, we used Python and Node.js to preview our web pages. Now, it's time to explore a high-performance JavaScript runtime and practice reading official documentation like a real developer.

Your mission is divided into two focused tasks, and you must use the official Bun documentation to complete them.

---

## Task 1: The Bun Audit & Installation

Meet **Bun** — a modern, ultra-fast JavaScript runtime that is quickly becoming a favorite among web developers.

Your job is to check whether Bun is installed — and if not, install it.

### Step 1: Check if Bun is Installed

Open your terminal inside GitHub Codespaces and run:

```bash
bun --version
````

(Think back to how we checked `node -v` or `python --version`.)

### Possible Outcomes

* If Bun is installed → move to Task 2
* If not → install Bun using the official documentation

---

## Task 2: Serve Your Site with Bun

Previously, we used:

```bash
npx live-server
```

Now, you will use Bun's built-in package runner.

---

### Research Task

Go to the official Bun documentation and search (`cmd` + `k` or `ctrl` + `k`) for:

```bash
"serve command"
```

Better still you can go to the official Bun documentation and search for:

```bash
"HTML & static"
```

You are looking for how to run the **serve** package using:

```bash
bunx
```

(`bunx` works similarly to `npx`.)

---

## The Goal

* Start a local server for your `index.html`
* Open the preview in your browser
* Confirm your site is running successfully

---

## Hints

* Bun CLI closely **mimics Node.js CLI**
* If you know how `npx` works, you already have a big clue
* Try replacing familiar commands with Bun equivalents
* Explore the docs — don't guess blindly

---

## Bonus Challenge: Master the Port 🚀

Now that your Bun server is running, let’s level up.

### Part 1: Run on the Default Port

1. Start your Bun server normally using `bunx serve`
2. Observe the terminal output
3. Notice the default port number Bun is using (commonly something like `3000`)

---

### Part 2: Change the Port

Your next mission is to run the server on a custom port (e.g. `4000`).

#### Requirements

* The server must run on port `4000`
* You must use Bun (not Node)
* You must figure it out using documentation or prior knowledge

---

## Extra Hint

Think about how you previously ran:

```bash
npx live-server --port=4000
```

or:

```bash
npx serve --listen 4000
```

Now ask yourself…

> What happens if you replace `npx` with something else?

---

## Final Objective

By the end of this challenge, you should:

* Understand how Bun compares to Node CLI
* Be able to run static files using Bun
* Know how to use `bunx` as an alternative to `npx`
* Feel comfortable reading official documentation to solve problems

---

Good luck — and think like a real developer 🧠
