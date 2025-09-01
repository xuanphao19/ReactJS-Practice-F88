import PropTypes from "prop-types";
import clsx from "clsx";
import { NavLink } from "react-router";

import styles from "./Headers.module.css";
import ToggleTheme from "../../../components/toggleTheme";

function Headers({
  className = "",
  title = "Chào mừng đến với F8 React Day 35",
  children,
}) {
  return (
    <div className={clsx(styles.heading, className)}>
      <h1 className={clsx(styles.slogan)}>
        {title}
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(styles.gotoback, { [styles.show]: !isActive })
          }>
          Home
        </NavLink>
        <ToggleTheme />
      </h1>
      {children && children}
    </div>
  );
}

Headers.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
export default Headers;
