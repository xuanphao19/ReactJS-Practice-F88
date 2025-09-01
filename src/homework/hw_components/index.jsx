import PropTypes from "prop-types";
import { NavLink } from "react-router";
import clsx from "clsx";

import styles from "./Button.module.css";
import { ROUTES } from "../../config/routes.prefix";

function Button({
  primary = false,
  secondary = false,
  danger = false,
  outline = false,

  rounded = false,
  bordered = false,
  disabled = false,
  children,
  href,
  size = "medium",
  className,
  ...passProps
}) {
  const classNames = clsx(styles.button, className, styles[size], {
    [styles.primary]: primary,
    [styles.rounded]: rounded,
    [styles.bordered]: bordered,
    [styles.secondary]: secondary,
    [styles.danger]: danger,
    [styles.disabled]: disabled,
    [styles.outline]: outline,
  });

  const Component = href ? "a" : "button";

  return (
    <Component {...passProps} href={href} className={clsx(classNames)}>
      {children}
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,

  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,

  href: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};
const Lists = ({ as = "ul", children, className }) => {
  const List = as;
  return <List className={className}>{children}</List>;
};

const Item = ({ as = "li", children, className }) => {
  const NavItem = as;
  return <NavItem className={className}>{children}</NavItem>;
};
const Navigation = ({ children }) => {
  const Nav = "nav";

  return (
    <div className={clsx(styles.wrapper)}>
      <Nav className={clsx(styles.navigation)}>
        <Lists as="ul" className={clsx(styles.navlist)}>
          {navData.map((item) => {
            return (
              <Item key={item.id} as="li" className={clsx(styles.item)}>
                <NavLink
                  to={`/${item.url}`}
                  className={({ isActive }) =>
                    clsx(styles.link, { [styles.selected]: isActive })
                  }>
                  {item.title}
                </NavLink>
              </Item>
            );
          })}
        </Lists>
      </Nav>
      {children && <div className={clsx(styles.title)}>{children}</div>}
    </div>
  );
};

Navigation.propTypes = {
  children: PropTypes.node,
};
Lists.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.string,
};
Item.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.string,
};

const navData = [
  {
    id: "nav_hw_2_1-1",
    title: "Navigation",
    url: ROUTES.SETUPROUTER,
  },
  {
    id: "nav_hw_2_1-2",
    title: "Counter",
    url: ROUTES.COUNTER,
  },
  {
    id: "nav_hw_2_1=3",
    title: "Todo",
    url: ROUTES.TODOAPP,
  },
  {
    id: "nav_hw_2_1-4",
    title: "Profile",
    url: ROUTES.PROFILE,
  },
  {
    id: "nav_hw_2_1-5",
    title: "Products",
    url: ROUTES.PRODUCTS,
  },
  {
    id: "nav_hw_2_1-6",
    title: "Comment",
    url: ROUTES.COMMENT,
  },
  {
    id: "nav_hw_2_1-7",
    title: "Weathers",
    url: ROUTES.WEATHERS,
  },
  {
    id: "nav_hw_2_1-8",
    title: "Nice Button",
    url: ROUTES.NICEBUTTON,
  },
];

export default Button;
export { Navigation };
