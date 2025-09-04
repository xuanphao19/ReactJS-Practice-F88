import { useState } from "react";
import arrowRight from "/arrowRight.svg";

import { BASIC_THEORY } from "../config/routes.prefix";

function ContentTheory() {
  const [open, setOpen] = useState(false);

  const NavTheory = ({ items = BASIC_THEORY, index = null }) => {
    const [show, setShow] = useState({});

    const handleToggle = (e) => {
      e.preventDefault();
      const target = e.target.closest(".theory");
      if (!target) return;
      const id = target.id;

      setShow({ ...show, [id]: !show[id] });
    };

    return (
      <ul>
        {items.map((item, i) => {
          const newIndex = `${index === null ? i + 1 : index + `_${i + 1}`}`;
          return (
            <li key={item.id}>
              {!item.url ? (
                <span
                  id={item.id}
                  className={`nav-label theory${show[item.id] ? " open" : ""} `}
                  onClick={handleToggle}>
                  {`Phần ${newIndex}: ${item.title}`}
                  <img className="arrow-right" src={arrowRight} alt="" />
                </span>
              ) : (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {`Bài ${newIndex}: ${item.title}`}
                </a>
              )}

              {item.children && (
                <NavTheory items={item.children} index={newIndex} />
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="basic-theory">
      <h2
        id="theoryTitle"
        className={`${open ? " open" : ""}`}
        onClick={() => setOpen(!open)}>
        Lý thuyết cơ bản:
      </h2>
      <nav>{<NavTheory />}</nav>
    </div>
  );
}

export default ContentTheory;
