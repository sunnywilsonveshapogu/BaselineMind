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
    <main style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>BaselineMind (Monorepo)</h1>
      <p>React + Node (Express) — basic starter</p>

      <section style={{ marginTop: 24 }}>
        <h3>API Health</h3>
        <code>{JSON.stringify(health, null, 2) || "loading..."}</code>
      </section>

      <section style={{ marginTop: 24 }}>
        <h3>Greeting</h3>
        <code>{JSON.stringify(greet, null, 2) || "loading..."}</code>
      </section>

      <section style={{ marginTop: 24 }}>
        <h3>Current Time</h3>
        <code>{JSON.stringify(time, null, 2) || "loading..."}</code>
      </section>
    </main>
  );
}
