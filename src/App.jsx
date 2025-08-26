// import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const exercises = [
    {
      id: 1,
      name: "Counter App",
      url: "counter",
    },
    {
      id: 2,
      name: "Todo List App",
      url: "todo",
    },
    {
      id: 3,
      name: "Profile Card",
      url: "profile",
    },
    {
      id: 4,
      name: "Product List",
      url: "products",
    },
    {
      id: 5,
      name: "Comment System",
      url: "comments",
    },
    {
      id: 6,
      name: "Weather App",
      url: "weather",
    },
  ];

  return (
    <div className="container">
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1 className="slogan">Conquer ReactJS with F8 🚀</h1>
        <p className="desc">
          Dấu ấn khám phá và thực hành ReactJS cùng F8 -
          <a href="https://fullstack.edu.vn/">{` fullstack.edu.vn`}</a> Học lập
          trình để đi làm!
        </p>
      </div>

      <div className="basic-theory">
        <h2>Lý thuyết cơ bản</h2>
        <div className="content-theory"></div>
      </div>

      <nav>
        <h2 className={`exercises`}>Bài tập thực hành:</h2>
        <ul>
          <li>
            <span className={`nav-label`}>Bài tập buổi một:</span>
            <ul>
              {exercises.map((exercise, i) => (
                <li key={exercise.id}>
                  <a
                    href={`./exercises/exercises_1/${exercise.url}.html`}>{`Bài tập ${
                    i + 1
                  }: ${exercise.name}`}</a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <span className="nav-label">Bài tập buổi hai:</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
