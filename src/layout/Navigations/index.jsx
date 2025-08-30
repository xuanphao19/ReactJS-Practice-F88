import { useState } from "react";
import { NavLink } from "react-router";
import { ROUTES } from "../../config/routes.prefix";

const menuRoutes = [
  {
    id: "homework_2",
    title: "Bài tập buổi hai:",
    url: "",
    children: [
      {
        id: "homework_2_1",
        title: "Counter App",
        url: ROUTES.COUNTER,
      },
      {
        id: "homework_2_2",
        title: "Todo App",
        url: ROUTES.TODOAPP,
      },
      {
        id: "homework_2_3",
        title: "Profile App",
        url: ROUTES.PROFILE,
      },
      {
        id: "homework_2_4",
        title: "Products App",
        url: ROUTES.PRODUCTS,
      },
      {
        id: "homework_2_5",
        title: "Comment App",
        url: ROUTES.COMMENT,
      },
      {
        id: "homework_2_6",
        title: "Weathers App",
        url: ROUTES.WEATHERS,
      },
    ],
  },

  {
    id: "homework_3",
    title: "Bài tập buổi ba:",
    url: "",
    children: [
      {
        id: "homework_3_1",
        title: "Đang cập nhật dữ liệu",
        url: "homework_3/counter",
      },
    ],
  },

  {
    id: "homework_4",
    title: "Bài tập buổi Bốn:",
    url: "",
    children: [
      {
        id: "homework_4_1",
        title: "Đang cập nhật dữ liệu",
        url: "homework_4/counter",
      },
      {
        id: "homework_4_2",
        title: "Đang cập nhật dữ liệu",
        url: "homework_4/todo",
      },
      {
        id: "homework_4_3",
        title: "Đang cập nhật dữ liệu",
        url: "homework_4/profile",
      },
    ],
  },
];

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
];

// export const NavigHome = () => {
//   return <Navigations items={menuRoutes} isHome={true} />;
// };

const Navigations = ({
  items = exercises,
  isRoot = false,
  index = null,
  isHome = false,
}) => {
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
          ) : isHome ? (
            <NavLink to={item.url}>
              {`Bài tập ${index !== null ? `${index + 2}_` : ""}${i + 1}: ${
                item.title
              }`}
            </NavLink>
          ) : (
            <a href={`./exercises/${item.url}.html`}>
              {`Bài tập ${index !== null ? `${index + 1}_` : ""}${i + 1}: ${
                item.title
              }`}
            </a>
          )}

          {item.children && (
            <Navigations items={item.children} isHome={isHome} index={i} />
          )}
        </li>
      ))}
    </ul>
  );

  return !isHome && isRoot ? (
    <nav>
      <h2 className={`exercises`}>Bài tập thực hành:</h2>
      {content}
      <Navigations items={menuRoutes} isHome={true} />
    </nav>
  ) : (
    content
  );
};

export default Navigations;
