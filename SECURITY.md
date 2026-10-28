# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| Latest (main branch) | ✅ |

## Reporting a Vulnerability

If you discover a security vulnerability in **Weekend Explorer**, please report it responsibly.

**Do NOT create a public GitHub Issue for security vulnerabilities.**

### How to Report

1. **Email:** Send a report to the project owner via the contact on the GitHub profile.
2. **Include in your report:**
   - Description of the vulnerability
   - Affected endpoint, file, or component
   - Safe steps to reproduce (do not exploit user data)
   - Potential impact
   - Suggested fix (optional)

### What to Expect

- **Acknowledgement** within 48 hours
- **Status update** within 7 days
- **Fix timeline** based on severity:
  - Critical: within 24–48 hours
  - High: within 7 days
  - Medium/Low: within 30 days
- Credit in the changelog (if desired)

### Scope

This policy covers the following components:
- `backend/server.js` — Node.js API server
- `api/` — Vercel serverless functions
- `index.html`, `scripts.js`, `ai-agent.js` — Frontend application
- `admin/` — Admin dashboard

**Out of scope:**
- Third-party services (Clerk, Supabase, Google Maps, Resend)
- Dependencies (report those directly to the package maintainer)
- Vulnerabilities requiring physical access to the server

### Safe Harbor

We will not take legal action against researchers who:
- Report vulnerabilities in good faith
- Do not access, modify, or exfiltrate user data
- Do not perform denial-of-service testing
- Give us reasonable time to fix issues before disclosure

Thank you for helping keep Weekend Explorer secure. 🔐
