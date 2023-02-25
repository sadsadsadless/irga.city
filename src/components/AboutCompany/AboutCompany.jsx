import React from "react";
import styles from "./AboutCompany.module.scss";
import { useDatabase } from "../../store/DataProvider";
import { Info } from "../InfoList/Info";
import { MoreButton } from "../../ui/MoreButton";
import { InfoList } from "../InfoList/InfoList";

const AboutCompany = ({ 
  showMore = false, 
  subtitle
}) => {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>
				О нас
			</h2>
      <div className={styles.content}>
        <div className={styles.pb}>
          <p className={styles.p}>
						{subtitle}
					</p>
          {showMore && <MoreButton page={"about"} />}
        </div>
        <InfoList />
      </div>
    </div>
  );
};

export { AboutCompany };
