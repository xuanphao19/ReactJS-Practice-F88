import PropTypes from "prop-types";
import clsx from "clsx";

import Headers from "../../hw_components/Headers/Headers";
import Button, { Navigation } from "../../hw_components/index";
import styles from "./ShowButton.module.css";

function ShowButtons() {
  return (
    <div className="container">
      <Headers>
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
        <h2>Bài tập 2.2.1: Button đẹp dành cho bạn!</h2>
        <a
          href="https://github.com/xuanphao19/ReactJS-Practice-F88/blob/main/src/homework/homework_2/Homework_2_6.jsx"
          className="repositories"
          target="_blank"
          rel="noopener noreferrer">
          Repositories GitHub
        </a>
      </Navigation>
      <div className={clsx(styles.section)}>
        <div className={clsx(styles.button_group)}>
          <Button size="small" primary>
            Small
          </Button>
          <Button size="small" secondary>
            Secondary
          </Button>
          <Button size="small" danger>
            Danger
          </Button>
          <Button size="small" secondary disabled>
            Disabled
          </Button>
          <Button size="small" bordered outline>
            Outline
          </Button>
          <Button size="small" bordered rounded>
            Rounded
          </Button>
          <Button size="small" href={"/"}>
            Is the link
          </Button>
        </div>

        <div className={clsx(styles.button_group)}>
          <Button size="medium" primary>
            Small
          </Button>
          <Button size="medium" secondary>
            Secondary
          </Button>
          <Button size="medium" danger>
            Danger
          </Button>
          <Button size="medium" secondary disabled>
            Disabled
          </Button>
          <Button size="medium" bordered outline>
            Outline
          </Button>
          <Button size="medium" bordered rounded>
            Rounded
          </Button>
          <Button size="medium" href={"/"}>
            Is the link
          </Button>
        </div>

        <div className={clsx(styles.button_group)}>
          <Button size="large" primary>
            Small
          </Button>
          <Button size="large" secondary>
            Secondary
          </Button>
          <Button size="large" danger>
            Danger
          </Button>
          <Button size="large" secondary disabled>
            Disabled
          </Button>
          <Button size="large" bordered outline>
            Outline
          </Button>
          <Button size="large" bordered rounded>
            Rounded
          </Button>
        </div>
      </div>
    </div>
  );
}
/* primary = false,
secondary = false,
danger = false,
disabled = false,
bordered = false,
rounded = false,
outline = false,
children,
href,
size = "medium", */
export default ShowButtons;
