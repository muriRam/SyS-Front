"use client";

import styles from "./NavBar.module.css";
import Image from "next/image";
import { UserCircle } from "lucide-react";

const Navbar = () => {
  return (
        <nav className={styles.navbar}>
            <div className={styles.leftSection}>
                <Image 
                    src= "/logoSyS.png" 
                    alt= "SySLogo"
                    width={140}
                    height={90}
                    className={styles.logo}
                    
                />
            </div>

            <div className={styles.centerSection}>
                <h1 className={styles.title}>S&S Soldaduras y Servicios</h1>
            </div>
            
             <div className={styles.rightSection}>
                <button className={styles.profileButton}>
                <UserCircle size={38} />
                </button>
            </div>
        </nav>
    )
}

export default Navbar