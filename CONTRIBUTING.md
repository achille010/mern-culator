# Contributing to calculator-api

Thank you for your interest in contributing to **calculator-api**! This project is a simple Express.js calculator backend with a frontend client. Contributions of all kinds are welcome.

---

## Project Structure

```
calculator-api/
├── calc-backend/    # Express.js API with calculator routes
└── calc-frontend/   # HTML/JS frontend client
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- npm
- Git

### Local Setup

1. **Fork and clone** the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/calculator-api.git
   cd calculator-api
   ```

2. **Install backend dependencies:**
   ```bash
   cd calc-backend
   npm install
   ```

3. **Start the backend server:**
   ```bash
   node index.js
   ```
   The API should be running at `http://localhost:3000` (or whichever port is configured).

4. **Open the frontend** by opening `calc-frontend/index.html` in your browser, or serve it with a simple static server:
   ```bash
   npx serve calc-frontend
   ```

---

## How to Contribute

### Reporting Bugs

- Check [Issues](https://github.com/achille010/calculator-api/issues) first to avoid duplicates.
- Open a new issue with:
  - A clear title and description
  - Steps to reproduce the bug
  - Expected vs. actual behavior
  - Your Node.js version (`node --version`)

### Suggesting Enhancements

Open an issue tagged `enhancement` and describe:
- What feature or improvement you'd like to see (e.g. new routes, better error handling, UI improvements)
- Why it would be useful

### Submitting a Pull Request

1. Create a branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test them locally.

3. Commit with a clear, descriptive message:
   ```bash
   git commit -m "Add: modulo operation route"
   ```

4. Push your branch and open a Pull Request against `main`:
   ```bash
   git push origin feature/your-feature-name
   ```

5. In your PR description, explain what changed and how you tested it.

---

## Code Style Guidelines

- Use **2 spaces** for indentation in JavaScript
- Keep route handlers concise — extract logic into helper functions where needed
- Always validate and handle edge cases (e.g. division by zero, non-numeric input)
- Use meaningful variable and function names
- Add a comment above any non-obvious logic:
  ```js
  // Guard against division by zero
  if (b === 0) return res.status(400).json({ error: 'Cannot divide by zero' });
  ```

---

## Ideas for Contributions

- ➕ Add new operation routes (e.g. modulo, power, square root)
- 🧪 Add unit tests with a framework like Jest or Mocha
- 🛡️ Add input validation middleware
- 🎨 Improve the frontend UI
- 📝 Improve documentation or add API usage examples to the README

---

## Questions?

Feel free to open an issue or reach out to [@achille010](https://github.com/achille010) via GitHub. All contributions, big or small, are appreciated!