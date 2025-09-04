import PropTypes from "prop-types";
import Buttons, { Navigation } from "../../hw_components";
import Headers from "../../hw_components/Headers/Headers";

function SetupRouter() {
  return (
    <div className="container">
      <Headers title="Chào mừng đến với F8 React Day 35">
        <p className="desc">
          Chinh phục ReactJS cùng F8 -
          <a
            href="https://fullstack.edu.vn/"
            target="_blank"
            rel="noopener noreferrer">
            fullstack.edu.vn
          </a>
          Học lập trình để đi làm!
        </p>
      </Headers>

      <Navigation>
        <h2>
          Bài 2.1.1.a: Setup ROUTES:
          <a
            href="https://github.com/xuanphao19/ReactJS-Practice-F88/blob/main/src/AppRoutes/AppRoutes.jsx"
            className="repositories"
            target="_blank"
            rel="noopener noreferrer">
            <span>⭐</span> Repositories GitHub
          </a>
        </h2>
        <h2>
          Bài 2.1.1.b: Setup Navigation:
          <a
            rel="noopener noreferrer"
            href="https://github.com/xuanphao19/ReactJS-Practice-F88/blob/main/src/homework/homework_2/SetupRouter/SetupRouter.jsx"
            className="repositories"
            target="_blank">
            <span>⭐</span> Repositories GitHub
          </a>
        </h2>
      </Navigation>
    </div>
  );
}

export default SetupRouter;
