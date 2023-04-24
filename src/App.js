import React, { useState } from "react";
import { useRef } from "react";
import Modal from "./components/Card/modal";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const handleModal = () => setShowModal(!showModal);

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

  return (
    <div>
      <div className="container text-center">
        <button className="btn btn-info btn-lg mt-5" onClick={handleModal}>
          Open Modal
        </button>
        <Modal
          handleModal={handleModal}
          showModal={showModal}
          isRunning={isRunning}
          time={time}
          handleStartClick={handleStartClick}
          handlePauseClick={handlePauseClick}
        />
      </div>
      {showModal ? (
        <div
          className="modal-backdrop fade in opacity-50 "
          onClick={handleModal}
        ></div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
