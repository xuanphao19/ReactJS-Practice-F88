import { useState } from "react";
import arrowRight from "/arrowRight.svg";

import { BASIC_THEORY } from "../config/routes.prefix";

function ContentTheory() {
  const NavTheory = ({ items = BASIC_THEORY, index = null }) => {
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

    return (
      <ul>
        {items.map((item, i) => (
          <li key={item.id}>
            {!item.url ? (
              <span
                id={item.id}
                className={`nav-label${open[item.id] ? " open" : ""}`}
                onClick={handleOpen}>
                {item.title}
                <img className="arrow-right" src={arrowRight} alt="" />
              </span>
            ) : (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {`Phần ${index !== null ? `${index + 1}_` : ""}${i + 1}: ${
                  item.title
                }`}
              </a>
            )}

            {item.children && <NavTheory items={item.children} index={i} />}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="basic-theory">
      <h2 className={`exercises`}>Lý thuyết cơ bản:</h2>
      <nav>
        <NavTheory />
      </nav>
    </div>
  );
}

export default ContentTheory;
