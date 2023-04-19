import React, { useState, useRef } from 'react';

function CounterButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Open Counter
    </button>
  );
}

function CounterBox({ onClose, isRunning, time, onStartClick, onPauseClick }) {
    return (
      <div className="counter-box">
        <div className="counter-box-header">
          <button onClick={onClose}>X</button>
        </div>
        <div className="counter-box-body">
          <h2>Stopwatch</h2>
          <div className="stopwatch">
            <span>{`${Math.floor(time / 60)}:${time % 60
              .toString()
              .padStart(2, '0')}`}</span>
            <div className="stopwatch-controls">
              {!isRunning ? (
                <button onClick={onStartClick}>Start</button>
              ) : (
                <button onClick={onPauseClick}>Pause</button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

function CounterApp() {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const handleButtonClick = () => {
    setIsBoxOpen(true);
  };

  const handleCloseBox = () => {
    setIsBoxOpen(false);
  };

  const handleStartClick = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handlePauseClick = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleResetClick = () => {
    setTime(0);
  };

  return (
    <div className="counter-app">
      <CounterButton onClick={handleButtonClick} />
      {isBoxOpen && (
        <CounterBox
          onClose={handleCloseBox}
          isRunning={isRunning}
          time={time}
          onStartClick={handleStartClick}
          onPauseClick={handlePauseClick}
          onResetClick={handleResetClick}
        />
      )}
    </div>
  );
}

export default CounterApp;