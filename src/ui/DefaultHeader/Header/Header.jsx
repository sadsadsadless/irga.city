import React from "react";
import { Nav } from "../Nav";
import styles from "./Header.module.scss";
import irgaLogoX2 from "../../../../public/images/irga-logo-x2.png";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";


function Header({ 
	pad = false,
	onOpen = f => f
}) {

	const [width] = useWindowSize();

  return (
		<>
			<header className={pad ? styles.padHeader : styles.header}>
				<Link to="/">
      	  <img 
      	    src={irgaLogoX2} 
      	    alt="IRGA Logotype" 
      	  />
      	</Link>
				<>
					{
						width < 800
							? <HiOutlineMenuAlt4 
								className={styles.burger}
								onClick={onOpen}
							/>
							: <Nav />
					}
				</>
    	</header>
		</>
  );
}

export { Header };
