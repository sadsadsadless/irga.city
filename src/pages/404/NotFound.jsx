import React from 'react';
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div
      className={styles.main}
    >
      <h1>
        <span>4</span><span>0</span><span>4</span>
      </h1>
      <h3>The page is not found</h3>
    </div>
  );
};

export { NotFound };