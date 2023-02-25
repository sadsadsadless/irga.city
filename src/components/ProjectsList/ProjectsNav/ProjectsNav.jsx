import React from "react";
import styles from "./ProjectsNav.module.scss";
import { NavLink } from "react-router-dom";

const ProjectsNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to={"/projects"}>
        <span></span>
        <h5>
          Все проекты
        </h5>
      </NavLink>
      <NavLink to={"/social"}>
        <span></span>
        <h5>
          Социальные объекты
        </h5>
      </NavLink>
      <NavLink to={"/residential"}>
        <span></span>
        <h5>
          Жилые здания
        </h5>
      </NavLink>
      <NavLink to={"/beauty"}>
        <span></span>
        <h5>
          Благоустройство
        </h5>
      </NavLink>
			<NavLink to={"/other"}>
        <span></span>
        <h5>
          Прочее
        </h5>
      </NavLink>
    </nav>
  );
};

export { ProjectsNav };
