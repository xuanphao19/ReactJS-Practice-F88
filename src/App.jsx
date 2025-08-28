// import { useState } from "react";
import "./App.css";
import ToggleTheme from "./toggleTheme";

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

  function ContentTheory() {
    return (
      <div className="basic-theory">
        <h2>Lý thuyết cơ bản</h2>
        <div className="content-theory"></div>
      </div>
    );
  }

  function Header() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1 className="slogan">
          Conquer ReactJS with F8 🚀. <ToggleTheme />
        </h1>
        <p className="desc">
          Dấu ấn khám phá và thực hành ReactJS cùng F8 -
          <a href="https://fullstack.edu.vn/">fullstack.edu.vn</a> Học lập trình
          để đi làm!
        </p>
      </div>
    );
  }

  function Navigation() {
    return (
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
    );
  }

  return (
    <div className="container">
      <Header />
      <div className="exercise-content">
        <a
          href="https://github.com/xuanphao19/ReactJS-Practice-F88"
          className="repositories">
          Repositories GitHub
        </a>
        <ContentTheory />
        <Navigation />
      </div>
    </div>
  );
}

export default App;
