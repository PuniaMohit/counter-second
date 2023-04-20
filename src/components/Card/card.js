import CounterBox from "../CounterBox/counterBox";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";

const Card = (props) => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton onClick={props.handleCloseBox}>
          <Modal.Title>STOPWATCH</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CounterBox
            isRunning={props.isRunning}
            time={props.time}
            onStartClick={props.handleStartClick}
            onPauseClick={props.handlePauseClick}
          />
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default Card;
