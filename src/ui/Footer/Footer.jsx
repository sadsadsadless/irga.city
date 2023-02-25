import React from "react";
import styles from "./Footer.module.scss";
import { Nav } from "../DefaultHeader/Nav";
import { useDatabase } from "../../store/DataProvider";
import irga from "../../../public/images/irga-logo-x2.png";

function Footer() {

  const { useCategory } = useDatabase();
  const contactsText = useCategory("contactsText");
	
  return (
    <footer className={styles.footer}>
      <div>
        <img 
          className={styles.img}
          src={irga}
          alt="irga-logotype" 
        />
        <p className={styles.p}>
          © 2022  Все права защищены
        </p>
      </div>
      <div className={styles.block}>
        <Nav />
        <div className={styles.underNav}>
          {
            contactsText &&
            contactsText.map(item => {
              return item.id % 2 == 0
                ? <p key={item.id}>
                    { item.text }
                  </p>
                : null
            })
          }
        </div>
      </div>
		</footer>
  );
}

export { Footer };