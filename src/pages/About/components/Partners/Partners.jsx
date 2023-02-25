import React from 'react';
import image from "../../../../../public/images/partners-image.png";
import styles from "./Partners.module.scss";

const Partners = () => {
  return (
    <div
      className={styles.partners}
    >
      <h2>
        Наши партнеры
      </h2>
      <div className={styles.cnt}>
        <img 
          src={image}
          alt="Partners"
        />
      </div>
    </div>
  )
}

export { Partners };