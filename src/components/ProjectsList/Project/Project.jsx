import React from 'react';
import styles from "./Project.module.scss";
import { MoreButton } from "../../../ui/MoreButton";
import { Link } from 'react-router-dom';

const Project = ({
  id,
  title,
  img,
  category,
  big,
  catLink,
  main = false,
  route = ""
}) => {

  let page = "";

  if (main) {
    page = "projects";
  } else {
    page = route;
  }

  return (
      <section
        className={big ? styles.big : styles.little}
      >
        <Link to={`/${page}/${id}`}>
          <img
            src={img} 
            alt="Project Image" 
          />
        </Link>
        <h3>
          { title }
        </h3>
        <Link to={`/${catLink}`}>
          <p className={styles.p}>
            { category }
          </p>
        </Link>
        <MoreButton
          page={page}
          id={id}
        />
      </section>
  );
};

export { Project };