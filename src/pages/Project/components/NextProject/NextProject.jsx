import React from 'react';
import styles from "./NextProject.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";
// import { useDatabase } from '../../../../store/DataProvider';

const NextProject = ({
  id,
  total,
  next = f => f,
  title,
  img
}) => {
  let Nind = String(Number(id) + Number(1))
    if (Nind >= 24) {
      Nind = String(Number(id) - Number(22))
    }

  console.log(next)

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <button 
          onClick={() => next(id)}
          className={styles.button}
        >
          <p>
            Следующий проект
          </p>
          <div>
            <p>
              {Nind}/{total}
            </p>
            <HiOutlineArrowNarrowRight className={styles.arrow}/>
          </div>
        </button>
        <h2 className={styles.title}>
          { title }
        </h2>
      </div>
      <img
        className={styles.img} 
        src={img} 
        alt="project-image" 
      />
    </div>
  );
};

export { NextProject };