import "./counterBox.css";

function CounterBox(props) {
  const { time, isRunning, onStartClick, onPauseClick } = props;
  return (
    <div className="counter-box">
      <div className="stopwatch">
        <span>{`${Math.floor(time / 60)}:${
          time % (60).toString().padStart(2, "0")
        }`}</span>
      </div>
      <div className="stopwatch-controls">
        {!isRunning ? (
          <button onClick={onStartClick}>Start</button>
        ) : (
          <button onClick={onPauseClick}>Pause</button>
        )}
      </div>
    </div>
  );
}

export default CounterBox;
