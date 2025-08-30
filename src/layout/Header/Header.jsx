import { useLocation, Link } from "react-router";
import ToggleTheme from "../../components/toggleTheme";

function Header() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div className="container">
        <h1 className="slogan">
          Conquer ReactJS with: I-💕-F8
          {path !== "/" && (
            <Link className="gotoback" to="/">
              Home
            </Link>
          )}
          <ToggleTheme />
        </h1>
        <p className="desc">
          Dấu ấn khám phá và thực hành ReactJS cùng F8 -
          <a href="https://fullstack.edu.vn/">fullstack.edu.vn</a> Học lập trình
          để đi làm!
        </p>
      </div>
    </div>
  );
}
export default Header;
