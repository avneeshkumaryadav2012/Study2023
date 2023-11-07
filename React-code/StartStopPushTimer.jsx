import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const pushLap = () => {
    setLaps([...laps, seconds]);
  };

  const clearTimer = () => {
    setSeconds(0);
    setLaps([]);
  };

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <button onClick={isRunning ? stopTimer : startTimer}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={pushLap} disabled={!isRunning}>
        Push Lap
      </button>
      <button onClick={clearTimer}>Clear Timer</button>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            Lap {index + 1}: {lap} seconds
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Timer;
