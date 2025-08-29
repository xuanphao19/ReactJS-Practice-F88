import { useState } from "react";
import "./App.css";
import ToggleTheme from "./toggleTheme";

const exercises = [
  {
    id: "exercises_1",
    title: "Bài tập buổi một:",
    url: "",
    children: [
      {
        id: "exercises_1_1",
        title: "Counter App",
        url: "exercises_1/counter",
      },
      {
        id: "exercises_1_2",
        title: "Todo List App",
        url: "exercises_1/todo",
      },
      {
        id: "exercises_1_3",
        title: "Profile Card",
        url: "exercises_1/profile",
      },
      {
        id: "exercises_1_4",
        title: "Product List",
        url: "exercises_1/products",
      },
      {
        id: "exercises_1_5",
        title: "Comment System",
        url: "exercises_1/comments",
      },
      {
        id: "exercises_1_6",
        title: "Weather App",
        url: "exercises_1/weather",
      },
    ],
  },

  {
    id: "exercises_2",
    title: "Bài tập buổi hai:",
    url: "",
    children: [
      {
        id: "exercises_2_1",
        title: "Chờ cập nhật",
        url: "exercises_2/counter",
      },
      {
        id: "exercises_2_2",
        title: "Chờ cập nhật",
        url: "exercises_2/todo",
      },
      {
        id: "exercises_2_3",
        title: "Chờ cập nhật",
        url: "exercises_2/profile",
      },
      {
        id: "exercises_2_4",
        title: "Chờ cập nhật",
        url: "exercises_2/products",
      },
      {
        id: "exercises_2_5",
        title: "Chờ cập nhật",
        url: "exercises_2/comments",
      },
      {
        id: "exercises_2_6",
        title: "Chờ cập nhật",
        url: "exercises_2/weather",
      },
    ],
  },

  {
    id: "exercises_3",
    title: "Bài tập buổi ba:",
    url: "",
    children: [
      {
        id: "exercises_3_1",
        title: "Chờ cập nhật",
        url: "exercises_3/counter",
      },
      {
        id: "exercises_3_2",
        title: "Chờ cập nhật",
        url: "exercises_3/todo",
      },
      {
        id: "exercises_3_3",
        title: "Chờ cập nhật",
        url: "exercises_3/profile",
      },
      {
        id: "exercises_3_4",
        title: "Chờ cập nhật",
        url: "exercises_3/products",
      },
      {
        id: "exercises_3_5",
        title: "Chờ cập nhật",
        url: "exercises_3/comments",
      },
      {
        id: "exercises_3_6",
        title: "Chờ cập nhật",
        url: "exercises_3/weather",
      },
    ],
  },
];

function App() {
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
          Conquer ReactJS with: I-💕-F8 <ToggleTheme />
        </h1>
        <p className="desc">
          Dấu ấn khám phá và thực hành ReactJS cùng F8 -
          <a href="https://fullstack.edu.vn/">fullstack.edu.vn</a> Học lập trình
          để đi làm!
        </p>
      </div>
    );
  }

  const Navigations = ({ items, isRoot = false }) => {
    const [open, setOpen] = useState({});

    const handleOpen = (e) => {
      const id = e.target.id;
      setOpen((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    };

    const content = (
      <ul>
        {items.map((item, i) => (
          <li key={item.id}>
            {!item.url ? (
              <span
                id={item.id}
                className={`nav-label${open[item.id] ? " open" : ""}`}
                onClick={handleOpen}>
                {item.title}
              </span>
            ) : (
              <a href={`./exercises/${item.url}.html`}>
                {`Bài tập ${i + 1}: ${item.title}`}
              </a>
            )}

            {item.children && <Navigations items={item.children} />}
          </li>
        ))}
      </ul>
    );

    return isRoot ? (
      <nav>
        <h2 className={`exercises`}>Bài tập thực hành:</h2>
        {content}
      </nav>
    ) : (
      content
    );
  };

  function Navigation() {
    return (
      <nav>
        <ul>
          <li>
            <span className={`nav-label`}>Bài tập buổi một:</span>
            <ul>
              {exercises.map((exercise, i) => (
                <li key={`exercise-${exercise.id}`}>
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
        <Navigations items={exercises} isRoot />
      </div>
    </div>
  );
}

export default App;
