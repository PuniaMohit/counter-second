import "./counterButton.css";

function CounterButton({ onClick }) {
  return (
    <div className="button-container">
      <button className="open-counter-button" onClick={onClick}>
        Open Counter
      </button>
    </div>
  );
}

export default CounterButton;
