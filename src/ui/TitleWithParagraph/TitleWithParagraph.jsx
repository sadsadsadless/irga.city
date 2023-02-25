import React from "react";
import styles from "./TitleWithParagraph.module.scss";

function TitleWithParagraph({ 
  title,
  subtitle
}) {
  return (
    <div className={styles.div}>
      <h2>
        { title }
      </h2>
      <p>
        { subtitle }
      </p>
		</div>
  );
}

export { TitleWithParagraph };