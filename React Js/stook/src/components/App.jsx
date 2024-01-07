import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [count, setCount] = useState(time);

  function currentTime() {
    const count = new Date().toLocaleTimeString();
    setCount(count);
  }

  setInterval(currentTime, 1000);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
