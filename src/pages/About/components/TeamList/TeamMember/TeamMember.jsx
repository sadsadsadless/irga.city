import React from 'react';
import styles from "./TeamMember.module.scss";

const TeamMember = ({ 
  id, 
  name,  
  img, 
  position 
}) => {
  return (
    <div
      className={styles.main}
    >
      {
        img
          ? <img 
            className={styles.image}
            src={img}
            alt="Image"
          />
          : <div
            className={styles.noImage}
          ></div>
      }
      <h4>
        {name}
      </h4>
      <p>
        {position}
      </p>
    </div>
  )
}

export { TeamMember };