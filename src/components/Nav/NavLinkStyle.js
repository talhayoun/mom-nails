import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const NavLinkStyle = (props) => {
    const { title, path } = props;

    return (
        <NavLink
            to={path}
            className={({ isActive }) => (isActive ? styles.NavLinkStyle : undefined)}
        >
            {title}
        </NavLink>
    );
};

export default NavLinkStyle;
