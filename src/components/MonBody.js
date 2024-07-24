import React, { useRef, useState } from 'react';

function MonBody() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setSeconds(0);
  };

  const handleRestart = () => {
    clearInterval(countRef.current);
    setIsActive(true);
    setIsPaused(true);
    setSeconds(0);
    countRef.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>{seconds}s</h1>
      {!isActive && !isPaused ? (
        <button onClick={handleStart}>Start</button>
      ) : isPaused ? (
        <button onClick={handlePause}>Pause</button>
      ) : (
        <button onClick={handleResume}>Resume</button>
      )}
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default MonBody;
