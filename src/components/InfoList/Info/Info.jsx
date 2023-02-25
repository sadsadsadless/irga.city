import React from "react";
import styles from "./Info.module.scss";

const Info = ({
	firstNum,
	firstText,
	secondNum,
	secondText
}) => {
  return (
    <section className={styles.table}>
      <h2>{firstNum}</h2>
      <p>{firstText}</p>
      <h2>{secondNum}</h2>
      <p>{secondText}</p>
    </section>
  );
};

export { Info };
