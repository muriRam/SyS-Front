"use client";

import styles from "./NavBar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image 
                    src= "/logoSyS.png" 
                    alt= "SySLogo"
                    width={120}
                    height={40}
                    
                />
            </div>
            
            <h3>Esta es la NavBar</h3>
        </nav>
    )
}

export default Navbar