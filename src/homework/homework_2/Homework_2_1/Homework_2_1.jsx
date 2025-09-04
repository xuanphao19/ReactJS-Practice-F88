import { useState } from "react";
import Headers from "../../hw_components/Headers/Headers";
import { Navigation } from "../../hw_components";

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
      <Headers>
        <p className="desc">
          Chinh phục ReactJS cùng F8 -
          <a
            href="https://fullstack.edu.vn/"
            target="_blank"
            rel="noopener noreferrer">
            fullstack.edu.vn
          </a>
          Học lập trình để đi làm!
        </p>
      </Headers>
      <Navigation>
        <h2 className="exercise_1">Bài tập 2.1.2: Counter App</h2>
        <a
          href="https://github.com/xuanphao19/ReactJS-Practice-F88/blob/main/src/homework/homework_2/Homework_2_1/Homework_2_1.jsx"
          className="repositories"
          target="_blank"
          rel="noopener noreferrer">
          <span>⭐</span> Repositories GitHub
        </a>
      </Navigation>

      <div className="exercise-content">
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
