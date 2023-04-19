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

  export default CounterBox