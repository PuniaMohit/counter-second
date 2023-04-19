import CounterBox from "../CounterBox/counterBox";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Modals = (props) => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const handleCloseBox = () => {
    props.setIsBoxOpen(false);
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
  console.log("wooow");
  return (
    <>
      {/* <div className="modal" tabIndex="-1" role="dialog">...it can be used in place of below code
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                        <CounterBox
                            onClose={handleCloseBox}
                            isRunning={isRunning}
                            time={time}
                            onStartClick={handleStartClick}
                            onPauseClick={handlePauseClick}
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div> */}
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* <p>.</p> */}
            <CounterBox
              onClose={handleCloseBox}
              isRunning={isRunning}
              time={time}
              onStartClick={handleStartClick}
              onPauseClick={handlePauseClick}
            />
          </Modal.Body>

          {/* <Modal.Footer>....can also be used ..
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer> */}
        </Modal.Dialog>
      </div>
    </>
  );
};

export default Modals;
