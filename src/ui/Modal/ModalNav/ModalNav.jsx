import React from "react";
import styles from "./ModalNav.module.scss";
import { Link } from "react-router-dom";

const ModalNav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Link to="/projects">Проекты</Link>
      <Link to="/concepts">Концепции</Link>
    </nav>
  );
};

export { ModalNav };
