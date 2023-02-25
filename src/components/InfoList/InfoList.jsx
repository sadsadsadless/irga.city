import React from 'react';
import styles from "./InfoList.module.scss";
import { useDatabase } from '../../store/DataProvider';
import { Info } from "./Info";

const InfoList = () => {

  const { useCategory } = useDatabase();

  const tableData = useCategory("aboutUs");
    
    return (
      <div className={styles.list}>
        {
          tableData && 
          tableData.map((item) => {
            return <Info
              key={item.id}
              {...item}
            />
          })
        }
      </div>
    );
}

export { InfoList };