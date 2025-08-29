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
        title: "Đang cập nhật dữ liệu",
        url: "exercises_2/counter",
      },
      {
        id: "exercises_2_2",
        title: "Đang cập nhật dữ liệu",
        url: "exercises_2/todo",
      },
      {
        id: "exercises_2_3",
        title: "Đang cập nhật dữ liệu",
        url: "exercises_2/profile",
      },
      {
        id: "exercises_2_4",
        title: "Đang cập nhật dữ liệu",
        url: "exercises_2/products",
      },
      {
        id: "exercises_2_5",
        title: "Đang cập nhật dữ liệu",
        url: "exercises_2/comments",
      },
      {
        id: "exercises_2_6",
        title: "Đang cập nhật dữ liệu",
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
        title: "Đang cập nhật dữ liệu",
        url: "exercises_3/counter",
      },
      {
        id: "exercises_3_2",
        title: "Đang cập nhật dữ liệu",
        url: "exercises_3/todo",
      },
      {
        id: "exercises_3_3",
        title: "Đang cập nhật dữ liệu",
        url: "exercises_3/profile",
      },
      {
        id: "exercises_3_4",
        title: "Đang cập nhật dữ liệu",
        url: "exercises_3/products",
      },
      {
        id: "exercises_3_5",
        title: "Đang cập nhật dữ liệu",
        url: "exercises_3/comments",
      },
      {
        id: "exercises_3_6",
        title: "Đang cập nhật dữ liệu",
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

  const Navigations = ({ items, isRoot = false, index = null }) => {
    const [open, setOpen] = useState({});
    const handleOpen = (e) => {
      const target = e.target.closest(".nav-label");
      if (!target) return;
      const id = target.id;
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width={"1em"}
                  height={"1em"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="arrow-right">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            ) : (
              <a href={`./exercises/${item.url}.html`}>
                {`Bài tập ${index !== null ? `${index + 1}-` : ""}${i + 1}: ${
                  item.title
                }`}
              </a>
            )}

            {item.children && <Navigations items={item.children} index={i} />}
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
