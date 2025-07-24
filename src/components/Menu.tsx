import React, { useState } from "react";

export const Menu = ({ onStart }: { onStart: (username: string) => void }) => {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-5xl font-bold text-orange-500">ROCKWARS</h1>
      <input
        className="p-2 text-black rounded"
        placeholder="Enter Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-orange-500 px-6 py-2 text-white rounded hover:bg-orange-600"
        onClick={() => name && onStart(name)}
      >
        Start Game
      </button>
      <div className="text-sm mt-4 space-y-1">
        <div>🪨 Kill Streaks</div>
        <div>👁 First Person</div>
        <div>♻️ Respawn System</div>
      </div>
    </div>
  );
};
