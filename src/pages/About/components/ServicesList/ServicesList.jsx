import React from "react";
import { Service } from "./Service";
import styles from "./ServicesList.module.scss";
import { useDatabase } from "../../../../store/DataProvider";

function ServicesList() {

	const { useCategory } = useDatabase();
	const services = useCategory("servicesList")

  return (
    <div className={styles.mainList}>
      <h2 className={styles.h2}>Услуги</h2>
      <div className={styles.list}>
        {
					services &&
					services.map((item) => {
						if (item.id % 2 == 0) {
							return <Service 
								{...item} 
								key={item.id} 
								changeSide={true} 
							/>;
						} else {
							return <Service 
								key={item.id} 
								{...item} 
							/>;
						}
					})
				}    
      </div>
    </div>
  );
}

export { ServicesList };
