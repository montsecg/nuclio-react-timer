import React, { useEffect, useRef, useState } from "react";
import Button from "./components/button";
import TimeInput from "./components/time-input";
import Timer from "./components/timer";

function App() {
  const [paused, setPaused] = useState(true);
  const [focused, setFocused] = useState(false);
  const [selectedSeconds, setSelectedSeconds] = useState(10);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (paused || secondsLeft === 0) {
      setPaused(true);
    } else {
      setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
    }
  }, [paused, secondsLeft]);

  useEffect(() => {
    setSecondsLeft(selectedSeconds);
  }, [selectedSeconds]);

  useEffect(() => {
    if (focused) {
      document.querySelector("input").focus();
    }
  }, [focused]);

  return (
    <div>
      {focused ? (
        <TimeInput
          value={selectedSeconds}
          onChange={(e) => setSelectedSeconds(e.target.value)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <Timer
          value={secondsLeft}
          onClick={() => {
            setFocused(true);
          }}
        />
      )}
      <div>
        <Button
          variant="primary"
          disabled={secondsLeft === 0}
          onClick={() => {
            setPaused(!paused);
          }}
        >
          {paused ? "Start" : "Pause"}
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setPaused(true);
            setSecondsLeft(selectedSeconds);
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default App;
