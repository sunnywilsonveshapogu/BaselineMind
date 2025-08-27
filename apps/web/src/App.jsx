import React, { useEffect, useState } from "react";

export default function App() {
  const [health, setHealth] = useState(null);
  const [greet, setGreet] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    fetch("/api/health").then(r => r.json()).then(setHealth);
    fetch("/api/greet?name=BaselineMind").then(r => r.json()).then(setGreet);
    fetch("/api/time").then(r => r.json()).then(setTime);
  }, []);

  return (
    <main className="font-sans p-6">
      <h1 className="text-2xl font-bold text-primary">BaselineMind (Monorepo)</h1>
      <p className="text-secondary">React + Node (Express) — basic starter</p>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">API Health</h3>
        <pre className="mt-2 bg-surface p-2 rounded">
          {JSON.stringify(health, null, 2) || "loading..."}
        </pre>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">Greeting</h3>
        <pre className="mt-2 bg-surface p-2 rounded">
          {JSON.stringify(greet, null, 2) || "loading..."}
        </pre>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">Current Time</h3>
        <pre className="mt-2 bg-surface p-2 rounded">
          {JSON.stringify(time, null, 2) || "loading..."}
        </pre>
      </section>
    </main>
  );
}
