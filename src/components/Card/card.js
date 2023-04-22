import CounterBox from "../CounterBox/counterBox";
import Modal from "react-bootstrap/Modal";
import "./card.css";

const Card = (props) => {
  const {
    isRunning,
    time,
    handleStartClick,
    handlePauseClick,
    handleCloseBox,
  } = props;

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={handleCloseBox}>
          <Modal.Title>STOPWATCH</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CounterBox
            isRunning={isRunning}
            time={time}
            onStartClick={handleStartClick}
            onPauseClick={handlePauseClick}
          />
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default Card;
