import React from "react";
import styles from "./Service.module.scss";

function Service({ 
    changeSide = false,
		title,
		subtitle,
    img,
}) {
  return (
    <div className={changeSide ? styles.sideContainer : styles.container}>
      <img 
        className={styles.exampleImage} 
        src={img}
        alt={"Изображение услуги"}
      />
      <div className={styles.infoSide}>
        <h4>
          {title}
        </h4>
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export { Service };
