import { useState } from "react";

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
