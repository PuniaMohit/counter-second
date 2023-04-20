import "./App.css";
import CounterButton from "./components/CounterButton/counterButton";
import { useState, useRef } from "react";
import Card from "./components/Card/card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
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

  const handleButtonClick = () => {
    setIsBoxOpen(true);
  };

  return (
    <div className="counter-app">
      <CounterButton onClick={handleButtonClick} />
      {isBoxOpen ? (
        <Card
          setIsBoxOpen={setIsBoxOpen}
          isRunning={isRunning}
          time={time}
          handleStartClick={handleStartClick}
          handlePauseClick={handlePauseClick}
          handleCloseBox={handleCloseBox}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
