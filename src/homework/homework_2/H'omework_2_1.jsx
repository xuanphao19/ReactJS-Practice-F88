import { useState } from "react";
import Header from "../../layout/Header/Header";

function Counter() {
  const [count, setCount] = useState(0);
  const [pressed, setPressed] = useState(false);

  const calculate = (event) => {
    event.preventDefault();
    const id = event.currentTarget.id;
    setCount(
      id === "increase"
        ? count + 1
        : id === "decrease"
        ? count - 1
        : id === "reset" && 0,
    );
    setPressed(true);
    setTimeout(() => setPressed(false), 200);
  };

  return (
    <div className="container">
      <Header />
      <div className="exercise-content">
        <h2 className="exercise_1">Bài tập 2.1: Counter App ROUTES</h2>
        <a
          href="https://github.com/xuanphao19/ReactJS-Practice-F88/blob/main/src/homework/homework_2/H'omework_2_1.jsx"
          className="repositories">
          Repositories GitHub
        </a>
        <div className="calculator">
          <p
            className="result"
            style={{
              color: count > 0 ? "green" : count < 0 ? "red" : "#17171a",
            }}>{`${count > 0 ? `+${count}` : count}`}</p>
          <button className="calc-btn" id="increase" onClick={calculate}>
            Increase
          </button>
          <button className="calc-btn" id="decrease" onClick={calculate}>
            Decrease
          </button>
          <button className="calc-btn" id="reset" onClick={calculate}>
            Reset
          </button>
          <div className="electrode">
            {count > 0 && (
              <span className={`anode${pressed ? " pressed" : ""}`}>Dương</span>
            )}
            {count < 0 && (
              <span className={`cathode${pressed ? " pressed" : ""}`}>Âm</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
