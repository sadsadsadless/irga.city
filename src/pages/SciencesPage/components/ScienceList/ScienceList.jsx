import React from 'react';
import styles from "./ScienceList.module.scss";
import { useDatabase } from '../../../../store/DataProvider';
import { ScienceItem } from '../ScienceItem/ScienceItem';
const bodyScrollLock = require("body-scroll-lock");

const ScienceList = () => {

  const { useCategory } = useDatabase();
  const science = useCategory("science");
  const clear = bodyScrollLock.enableBodyScroll;

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2>Градостроительные концепции</h2>
        <div className={styles.miniHead}>
        </div>
      </div>
      <div className={styles.projects}>
        {
          science &&
          science.map(item => {
            return item.id % 2 == 0
              ? <ScienceItem 
                key={item.id}
                {...item}
                big={true}
              />
              : <ScienceItem 
                key={item.id}
                {...item}
              />
          })
        }
      </div>
    </div>
  )
}

export { ScienceList };
