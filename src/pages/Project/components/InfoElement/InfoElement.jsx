import React from 'react';
import styles from "./InfoElement.module.scss";

const InfoElement = ({
  text,
  title,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.p}>
        { text }
      </p>
      <h3 className={styles.t}>
        { title }
      </h3>
    </div>
  )
}

export { InfoElement };