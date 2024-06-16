import { useState, useEffect } from 'react';
import './cronometro.css';

const FullScreenTimer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  const handleStartStop = () => {
    setRunning(!running);
  };

  const handleReset = () => {
    setTime(0);
    setRunning(false);
  };

  const formatTime = (seconds) => {
    const getSeconds = `0${(seconds % 60)}`.slice(-2);
    const minutes = `${Math.floor(seconds / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="fullscreen-timer">
      <div className="timer-display">
        {formatTime(time)}
      </div>
      <div className="timer-controls">
        <button onClick={handleStartStop}>
          {running ? 'Stop' : 'Start'}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default FullScreenTimer;
