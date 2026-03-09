# Security Policy

## Supported Versions

Only the latest state of the `main` branch of **calculator-api** is actively maintained.

| Version | Supported |
|---------|-----------|
| `main` (latest) | ✅ Yes |
| Older commits | ❌ No |

---

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please **do not open a public GitHub issue**.

Instead, contact the maintainer privately:

- Reach out to [@achille010](https://github.com/achille010) directly via GitHub.
- Include a description of the vulnerability, steps to reproduce it, and the potential impact.

You can expect an acknowledgment within **7 days** and a resolution within **30 days** depending on severity.

---

## Security Considerations for This Project

**calculator-api** is an Express.js backend with a frontend client. Because it exposes HTTP routes, the following security practices are important:

### Input Validation
- All route inputs (query params, request bodies) should be validated and sanitized before use.
- Never pass raw user input directly into `eval()` or similar dynamic execution functions — this is especially critical for a calculator API where mathematical expressions might be evaluated.
- Reject non-numeric or malformed inputs with appropriate HTTP error responses (e.g. `400 Bad Request`).

### Division by Zero
- Ensure the division route explicitly handles division by zero and returns a safe error response rather than crashing or returning `Infinity`.

### Rate Limiting
- If deployed publicly, consider adding rate limiting middleware (e.g. `express-rate-limit`) to prevent abuse.

### Dependency Security
- Regularly audit dependencies for known vulnerabilities:
  ```bash
  npm audit
  ```
- Keep dependencies up to date with:
  ```bash
  npm update
  ```

### Environment & Credentials
- Never commit `.env` files, API keys, or secrets to this repository.
- Add `.env` to your `.gitignore`.

### CORS
- If the frontend and backend are served from different origins, configure CORS explicitly rather than using a wildcard (`*`) in production.

---

## Responsible Disclosure

We appreciate security researchers and contributors who report issues responsibly. Thank you for helping keep this project safe.