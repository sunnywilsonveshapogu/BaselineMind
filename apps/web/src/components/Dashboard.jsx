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
    <main className="p-6 font-sans bg-background text-text-primary">
      <header className="pb-4 border-b border-surface">
        <h1 className="text-3xl font-bold">Your Dashboard</h1>
        <p className="text-text-secondary">Track your dopamine baseline and build better habits.</p>
      </header>

      <div className="mt-6 grid gap-6">
        <section className="p-4 bg-surface rounded-lg">
          <h2 className="text-lg font-semibold text-text-secondary">Top Habit Loops</h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            {HABIT_OPTIONS.map((loop) => (
              <label
                key={loop}
                className="flex items-center space-x-3 p-3 bg-background rounded-md cursor-pointer hover:bg-gray-800"
              >
                <input
                  type="checkbox"
                  checked={selectedLoops.includes(loop)}
                  onChange={() => toggleLoop(loop)}
                  className="h-5 w-5 rounded bg-gray-700 border-gray-600 text-primary focus:ring-primary"
                />
                <span className="font-medium">{loop}</span>
              </label>
            ))}
          </div>
          {selectedLoops.length > 0 && (
            <p className="mt-4 text-sm text-secondary">
              Selected: {selectedLoops.join(", ")}
            </p>
          )}
        </section>

        <section className="p-4 bg-surface rounded-lg">
          <h2 className="text-lg font-semibold text-text-secondary">Baseline Level</h2>
          <div className="mt-4 flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="100"
              value={baseline}
              onChange={(e) => setBaseline(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <span className="font-bold text-xl text-primary">{baseline}</span>
          </div>
        </section>
      </div>
    </main>
  );
}

