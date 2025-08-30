import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { ROUTES_MENU, EXERCISES } from "../../config/routes.prefix";

// export const NavigHome = () => {
//   return <Navigations items={menuRoutes} isHome={true} />;
// };

const Navigations = ({
  items = EXERCISES,
  isRoot = false,
  index = null,
  isHome = false,
}) => {
  const [open, setOpen] = useState({});
  const [isLocal, setIsLocal] = useState(true);
  const [path, setPath] = useState("");

  useEffect(() => {
    setIsLocal(import.meta.env.MODE === "production");
  }, []);

  useEffect(() => {
    setPath(!isLocal ? "" : "/ReactJS-Practice-F88");
  }, [isLocal]);

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
              {`Bài  ${index !== null ? `${index + 2}_` : ""}${i + 1}: ${
                item.title
              }`}
            </NavLink>
          ) : (
            <a href={`${path}/exercises/${item.url}.html`}>
              {`Bài  ${index !== null ? `${index + 1}_` : ""}${i + 1}: ${
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
      <Navigations items={ROUTES_MENU} isHome={true} />
    </nav>
  ) : (
    content
  );
};

export default Navigations;
