import React from "react";
import styles from "./CompanyStory.module.scss";
import { useDatabase } from "../../../../store/DataProvider";
import { AboutCompany } from "../../../../components/AboutCompany";
import { TitleWithParagraph } from "../../../../ui/TitleWithParagraph";

function CompanyStory({
  firstOne,
  firstTwo,
  secondTitle,
  secondSubtitle,
  thirdTitle,
  thirdSubtitle,
}) {

  const { useCategory } = useDatabase();
  const text = useCategory("aboutUsText");

  return (
    <>
      {
        text &&
        text.map((item, i) => {
          return <AboutCompany 
          key={i}
          {...item}
        />
        })
      }
      <div className={styles.storyContainer}>
        {/* <div className={styles.unknownBlock}>
          <div className={styles.p}>
            <p>
              { firstOne }
            </p>
            <p>
              { firstTwo }
            </p>
          </div>
          <div className={styles.div} >sdf</div>
        </div> */}
        <TitleWithParagraph 
          title={secondTitle}
          subtitle={secondSubtitle}
        />
        <TitleWithParagraph 
          title={thirdTitle}
          subtitle={thirdSubtitle}
        />
      </div>
    </>
  );
}

export { CompanyStory };
