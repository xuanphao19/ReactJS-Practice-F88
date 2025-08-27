import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => {
    setTheme(theme === "dark" ? "" : "dark");
  };

  return (
    <button className="toggle-theme" onClick={toggle}>
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
