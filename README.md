# BaselineMind — Monorepo (React + Node)

### Structure
- `apps/api` → Node.js (Express) backend on `:4000`
- `apps/web` → React (Vite) frontend on `:3000` (proxies `/api/*` to `:4000`)
- npm workspaces for easy dev

### Endpoints
- `GET /api/health` – check server health
- `GET /api/greet?name=YourName` – friendly greeting
- `GET /api/time` – current server time

### Run
```bash
npm install
npm run dev

Open:
•UI: http://localhost:3000
•API: http://localhost:4000/api/health
```

---

## 🚀 Run it

```bash
# At repo root
npm install
npm run dev

•Frontend → http://localhost:3000
•Backend  → http://localhost:4000/api/health
```
