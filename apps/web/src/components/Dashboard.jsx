import React, { useState } from "react";

const HABIT_OPTIONS = ["Sleep", "Exercise", "Nutrition", "Mindfulness", "Work"];

export default function Dashboard() {
  const [selectedLoops, setSelectedLoops] = useState([]);
  const [baseline, setBaseline] = useState(50);

  const toggleLoop = (loop) => {
    setSelectedLoops((prev) =>
      prev.includes(loop) ? prev.filter((l) => l !== loop) : [...prev, loop]
    );
  };

  return (
    <main className="p-6 font-sans">
      <h1 className="text-2xl font-bold text-primary">Your Dashboard</h1>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Top Habit Loops</h2>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {HABIT_OPTIONS.map((loop) => (
            <label key={loop} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedLoops.includes(loop)}
                onChange={() => toggleLoop(loop)}
              />
              <span>{loop}</span>
            </label>
          ))}
        </div>
        {selectedLoops.length > 0 && (
          <p className="mt-2 text-sm text-secondary">
            Selected: {selectedLoops.join(", ")}
          </p>
        )}
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Baseline Level</h2>
        <div className="mt-2 flex items-center space-x-4">
          <input
            type="range"
            min="0"
            max="100"
            value={baseline}
            onChange={(e) => setBaseline(Number(e.target.value))}
            className="w-full"
          />
          <span className="font-medium">{baseline}</span>
        </div>
      </section>
    </main>
  );
}

