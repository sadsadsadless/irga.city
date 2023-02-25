import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

function Nav() {
  return (
    <nav
      className={styles.nav}
    >
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/about">О нас</NavLink>
      <NavLink to="/projects">Проекты</NavLink>
      <NavLink to="/concepts">Градостроительные концепции</NavLink>
    </nav>
  );
}

export { Nav };
