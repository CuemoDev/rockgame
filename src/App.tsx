import React, { useState } from "react";
import { Menu } from "./components/Menu";

const App = () => {
  const [username, setUsername] = useState("");

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 via-orange-800 to-black text-white">
      {!username ? (
        <Menu onStart={setUsername} />
      ) : (
        <div className="flex items-center justify-center h-full">
          <h1 className="text-3xl">Welcome, {username}! Game launching soon...</h1>
        </div>
      )}
    </div>
  );
};

export default App;
