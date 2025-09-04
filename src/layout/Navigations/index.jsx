import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router";
import arrowRight from "/arrowRight.svg";
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
  const ulRefs = useRef({});

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
    setOpen((prev) => {
      const newOpen = { ...prev, [id]: !prev[id] };
      setTimeout(() => {
        ulRefs.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
      return newOpen;
    });
  };

  const content = (
    <ul className="nav-list" ref={ulRefs}>
      {items.map((item, i) => {
        i = isHome ? i + 1 : i;
        const newIndex = `${
          index === null ? i + 1 : index + `.${isHome ? i : 1 + i}`
        }`;
        return (
          <li key={item.id}>
            {!item.url ? (
              <span
                id={item.id}
                className={`nav-label${open[item.id] ? " open" : ""}`}
                onClick={handleOpen}>
                {`${index === null ? "🏡 Bài tập" : "⭐ Bài"} ${newIndex}: ${
                  item.title
                }`}
                <img className="arrow-right" src={arrowRight} alt="arrow" />
              </span>
            ) : isHome ? (
              <NavLink to={item.url}>
                {`Bài ${newIndex}: ${item.title}`}
              </NavLink>
            ) : (
              <a href={`${path}/exercises/${item.url}.html`}>
                {`Bài ${newIndex}: ${item.title}`}
              </a>
            )}
            {item.children && (
              <Navigations
                items={item.children}
                isHome={isHome}
                index={newIndex}
              />
            )}
          </li>
        );
      })}
    </ul>
  );

  return !isHome && isRoot ? (
    <nav>
      <h2 className="exercises">Bài Tập Về Nhà:</h2>
      {content}
      <Navigations items={ROUTES_MENU} isHome={true} />
    </nav>
  ) : (
    content
  );
};

export default Navigations;
