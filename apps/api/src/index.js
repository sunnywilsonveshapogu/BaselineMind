import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, ts: new Date().toISOString() });
});

app.get("/api/greet", (req, res) => {
  const name = req.query.name || "BaselineMind";
  res.json({ message: `Hello, ${name}!` });
});

app.get("/api/time", (_req, res) => {
  res.json({ time: new Date().toISOString() });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
