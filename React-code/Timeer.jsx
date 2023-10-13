import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timeee, setTimeee] = useState("");

  const updatedTime = () => {
    const timeee = new Date().toLocaleTimeString();
    setTimeee(timeee);
  };

  useEffect(() => {
    setInterval(() => updatedTime(), 1000);
  }, []);
  return (
    <div className="App">
      <h1>Time : {timeee}</h1>
    </div>
  );
}

export default App;
