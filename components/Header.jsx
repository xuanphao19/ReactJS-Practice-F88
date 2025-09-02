import ToggleTheme from "./toggleTheme";

export default function Header() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 className="slogan">
        Conquer ReactJS with F8 🚀. <ToggleTheme />
      </h1>
      <p className="desc">
        Dấu ấn khám phá và thực hành ReactJS cùng F8 -
        <a
          href="https://fullstack.edu.vn/"
          target="_blank"
          rel="noopener noreferrer">
          fullstack.edu.vn
        </a>
        Học lập trình để đi làm!
      </p>
    </div>
  );
}
