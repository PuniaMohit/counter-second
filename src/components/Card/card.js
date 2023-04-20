import CounterBox from "../CounterBox/counterBox";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./card.css";
import { useState } from "react";

const Card = (props) => {
  const {
    isRunning,
    time,
    handleStartClick,
    handlePauseClick,
    handleCloseBox,
  } = props;

  // const [show, setShow] = useState(false);....all commented is for reference

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <>
      {/* <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
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
    </div> */}

      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        // show={show}
        // onHide={handleClose}
        backdrop="static"
        // keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            // onClick={handleClose}
          >
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Card;
