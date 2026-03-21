
<div align="center">

<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,js,react&theme=dark&perline=7" alt="Node.js, Express, MongoDB, JavaScript, reactjs" />

**Built with { Node.js, Express, MongoDB, JavaScript, React }**
# Calculator Api

</div>

---

## Overview

`calculator-api` is split into two independent applications that work together:

- **`calc-backend`** — a modular Node.js/Express REST API built with MVC architecture, handling arithmetic, trigonometric, and advanced math operations, with built-in input validation, error handling, and calculation history.
- **`calc-frontend`** — a React 19 + Vite + TailwindCSS interface that consumes the backend API via Axios.

Both apps can be run independently. The backend is fully functional as a standalone API and can be tested with any HTTP client.

---

## Project Structure

```
calculator-api/
├── calc-backend/
│   ├── index.js              # App entry point
│   ├── server.js             # Server bootstrap & config
│   ├── package.json
│   ├── controllers/          # Request handling & business logic
│   │   └── calculator.controller.js
│   ├── models/               # Pure math functions (zero side effects)
│   │   └── calculator.model.js
│   ├── routes/               # Route definitions (minimal, MVC-style)
│   └── middleware/           # Input validation, error handling, logging, history
│
├── calc-frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── package.json
│   ├── src/
│   │   ├── main.jsx          # React entry point
│   │   └── components/       # UI components
│   └── public/
│
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── LICENSE.md
└── README.md
```

---

## Installation

### Prerequisites

- Node.js 18 or higher
- npm 6 or higher

### 1. Clone

```bash
git clone https://github.com/achille010/calculator-api.git
cd calculator-api
```

### 2. Backend Setup

```bash
cd calc-backend
npm install
npm start
```

Server starts at `http://localhost:3000`.

### 3. Frontend Setup

Open a new terminal tab:

```bash
cd calc-frontend
npm install
npm run dev
```

Dev server starts at `http://localhost:5173`.

> Both servers must be running for the UI to communicate with the API.

---

## API Reference

**Base URL:** `http://localhost:3000`

All endpoints accept query parameters (`GET`) or a JSON body (`POST`) unless noted otherwise.

### Arithmetic Operations

| Endpoint | Methods | Parameters | Operation |
|---|---|---|---|
| `/add` | GET, POST | `a`, `b` | `a + b` |
| `/subtract` | GET, POST | `a`, `b` | `a - b` |
| `/multiply` | GET, POST | `a`, `b` | `a × b` |
| `/divide` | GET, POST | `a`, `b` | `a ÷ b` |
| `/power` | GET, POST | `a`, `b` | `a ^ b` |

### Advanced Operations

| Endpoint | Method | Parameters | Operation |
|---|---|---|---|
| `/factorial/:n` | GET | `n` — path param | `n!` |
| `/sqrt` | GET, POST | `a` | Square root of `a` |
| `/ln` | GET, POST | `a` | Natural logarithm of `a` |
| `/log` | GET, POST | `a` | Log base 10 of `a` |
| `/inv` | GET, POST | `a` | Inverse `1/a` |
| `/rnd` | GET, POST | `a` | Round `a` to 3 decimal places |
| `/ran` | GET | — | Random integer (0–999) |
| `/sumarray` | POST | `a` — array | Sum of all elements |
| `/history` | GET | — | Returns calculation log |

### Trigonometric Operations

All trig endpoints accept an optional `unit` query parameter: `deg` (default) or `rad`.

| Endpoint | Methods | Parameters | Operation |
|---|---|---|---|
| `/sin` | GET, POST | `a`, `?unit` | sin(a) |
| `/cos` | GET, POST | `a`, `?unit` | cos(a) |
| `/tan` | GET, POST | `a`, `?unit` | tan(a) |
| `/arcsin` | GET, POST | `a`, `?unit` | sin⁻¹(a) |
| `/arccos` | GET, POST | `a`, `?unit` | cos⁻¹(a) |
| `/arctan` | GET, POST | `a`, `?unit` | tan⁻¹(a) |

---

### Request Examples

**GET with query parameters**
```bash
curl "http://localhost:3000/add?a=35&b=23"
```

**POST with JSON body**
```bash
curl -X POST http://localhost:3000/multiply \
  -H "Content-Type: application/json" \
  -d '{"a": 6, "b": 7}'
```

**Factorial via path parameter**
```bash
curl "http://localhost:3000/factorial/5"
```

**Trigonometric with unit**
```bash
curl "http://localhost:3000/sin?a=90&unit=deg"
curl "http://localhost:3000/sin?a=1.5708&unit=rad"
```

**Array sum**
```bash
curl -X POST http://localhost:3000/sumarray \
  -H "Content-Type: application/json" \
  -d '{"a": [1, 2, 3, 4, 5]}'
```

### Response Format

```json
{
  "Result": 58
}
```

**Error response**
```json
{
  "error": "Invalid Numbers"
}
```

---

## Frontend

The React frontend is a standalone Vite app that communicates with the backend via Axios.

### Available Scripts

```bash
npm run dev       # Start dev server with HMR
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

### Key Dependencies

| Package | Purpose |
|---|---|
| `react` / `react-dom` | UI rendering |
| `axios` | HTTP requests to the backend |
| `tailwindcss` | Utility-first styling |
| `vite` | Build tool and dev server |
| `eslint` | Code quality |

### API Connection

By default, the frontend targets `http://localhost:3000`. To change this, update the base URL in your Axios config or set an environment variable in `.env`:

```env
VITE_API_BASE_URL=http://localhost:3000
```

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: describe your change"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a Pull Request against `main`

Please review [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) before submitting.

For security issues, refer to [SECURITY.md](./SECURITY.md).

---

## Roadmap

- [ ] Unit and integration tests
- [ ] Docker support for both apps
- [x] Trigonometric and logarithmic functions
- [ ] Dark mode toggle on the frontend
- [ ] Persistent history with a database
- [ ] Export calculations as CSV

---

## License

MIT — see [LICENSE.md](./LICENSE.md) for full terms.

---

<div align="center">
Built by <a href="https://github.com/achille010">achille010</a> · Kigali, Rwanda
</div>