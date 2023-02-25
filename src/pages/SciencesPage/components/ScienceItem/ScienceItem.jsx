import React from 'react';
import styles from "./ScienceItem.module.scss";
import { MoreButton } from '../../../../ui/MoreButton';
import { Link } from 'react-router-dom';

const ScienceItem = ({
  title,
  id, 
  category,
  img,
  big
}) => {
  return (
    <div className={big ? styles.bigContainer : styles.container}>
      <Link to={`/concepts/${id}`}>
        <img 
          className={styles.img}
          src={img}
          alt="science-image" 
        />
      </Link>
      <h3>
        { title }
      </h3>
      <p className={styles.p}>
        { category }
      </p>
      <MoreButton
        page={"concepts"}
        id={id}
      />
    </div>
  )
}

export { ScienceItem };