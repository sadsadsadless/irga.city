import React from "react";
import styles from "./Authors.module.scss";

const Authors = (
  authors,
  architectors
) => {
  console.log(authors);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Авторы
      </h2>
      <div className={styles.authors}>
      {authors.authors && <h4 className={styles.sub}>
        Авторский состав:
      </h4>}
      {
        authors.authors
          ? Object.values(authors.authors).map((item, index) => {
          return <p key={index}>
            { item }
          </p>
          }) 
          : null
      }
      {authors.architectors
        ? <h4 className={styles.sub}>
          Архитекторы-визуализаторы:
        </h4>
        : null
      }
      {
        authors.architectors
          ? Object.values(authors.architectors).map((item, index) => {
          return <p key={index}>
            { item }
          </p>
          })
          : null
      }
      </div>
    </div>
  );
};

export { Authors };