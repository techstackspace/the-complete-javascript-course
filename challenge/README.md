# Challenge 1: Serve `index.html` Locally with Bun

In the previous lesson, we used different CLI tools to run and preview our project in the browser.

We also saw that GitHub Codespaces comes with some tools pre-installed, such as:

- Git
- Node.js
- Python
- npm

However, not every CLI tool is installed by default.

In this challenge, your task is to check whether Bun is installed, install it if needed, and use it to serve a static `index.html` file locally.

---

## Goal

Your goal is to run the project in the browser using Bun.

By the end of this challenge, you should be able to:

- Check if Bun is installed
- Install Bun if it is not available
- Use Bun to run a local development server
- Preview `index.html` in the browser
- Compare Bun with the Node/npm workflow

---

## Challenge Instructions

### Step 1: Check if Bun is installed

In your terminal, run:

```bash
bun --version
````

If Bun is installed, you should see a version number.

Example:

```bash
1.x.x
```

If you see an error such as:

```text
bun: command not found
```

then Bun is not installed yet.

---

### Step 2: Install Bun

Go to the official Bun website:

```text
https://bun.sh
```

Look for the installation command and run it in your terminal.

After installation, read the message returned in the terminal carefully.

Bun may ask you to add it to your shell configuration file, such as:

```text
.zshrc
.bashrc
.profile
```

Follow the instruction shown in your terminal.

Then check again:

```bash
bun --version
```

---

### Step 3: Serve the static HTML file

Your project contains an `index.html` file.

Your challenge is to find out how to serve this file locally using Bun.

Hint:

Bun can run some commands in a similar way to npm.

For example, with Node/npm you may have seen:

```bash
npx live-server
```

With Bun, you can try the Bun equivalent.

---

### Step 4: Open the project in the browser

After starting the server, Bun or the tool you run should give you a local URL.

It may look like this:

```text
http://localhost:3000
```

or:

```text
http://localhost:8080
```

Open that URL in your browser.

If you are using GitHub Codespaces, use the forwarded port URL instead.

---

## Bonus Task

Try running the server on a different port.

For example:

```bash
4000
```

Your task is to figure out how to change the port when running the server.

---

## Research Tip

Do not worry if you do not know the answer immediately.

This challenge is also about learning how to research documentation.

You can use:

- Bun documentation
- Terminal help commands
- Browser search
- AI assistant in documentation pages
- VS Code terminal output

Useful commands to explore:

```bash
bun --help
```

```bash
bunx --help
```

---

## What You Should Notice

Bun is becoming popular because it can work as:

- a JavaScript runtime
- a package manager
- a script runner
- a development tool

It also mimics many npm workflows, which makes it easier to learn if you already understand Node.js and npm.

For example:

```bash
npx <package>
```

has a similar Bun alternative:

```bash
bunx <package>
```

---

## Expected Outcome

At the end of this challenge, you should have your `index.html` file running in the browser using Bun.

You should also understand that:

- Node.js and npm are commonly used in JavaScript projects
- Bun can perform similar tasks
- Bun commands often feel similar to npm commands
- Local servers allow us to preview HTML files in the browser
- Some servers support live reload, while others may require manual refresh

---

## Note

The full solution is explained in the next video:

```text
04. Bun CLI vs Node CLI - Running and Serving Files.mp4
```

Try the challenge first before watching the solution.
