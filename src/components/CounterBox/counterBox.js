import "./counterBox.css";

function CounterBox(prop) {
  return (
    <div className="counter-box">
      <div className="stopwatch">
        <span>{`${Math.floor(prop.time / 60)}:${
          prop.time % (60).toString().padStart(2, "0")
        }`}</span>
      </div>
      <div className="stopwatch-controls">
        {!prop.isRunning ? (
          <button onClick={prop.onStartClick}>Start</button>
        ) : (
          <button onClick={prop.onPauseClick}>Pause</button>
        )}
      </div>
    </div>
  );
}

export default CounterBox;
