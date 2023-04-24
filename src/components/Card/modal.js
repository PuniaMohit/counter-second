import { useEffect } from "react";
import CounterBox from "../CounterBox/counterBox";

function Modal(props) {
  const {
    showModal,
    handleModal,
    isRunning,
    time,
    handleStartClick,
    handlePauseClick,
  } = props;

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showModal]);

  return (
    <div
      className={
        showModal
          ? "modal fade in show mt-5 h-auto container-fluid"
          : "modal fade"
      }
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mx-auto" id="exampleModalLabel">
            STOPWATCH
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={handleModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <CounterBox
            isRunning={isRunning}
            time={time}
            onStartClick={handleStartClick}
            onPauseClick={handlePauseClick}
          />
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
}

export default Modal;
