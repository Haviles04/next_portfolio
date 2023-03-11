import React from "react";
import styles from "@/styles/navbar.module.css";
import Image from "next/image";
import logo from "@/assets/logo.png";

function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logo}>
        <Image src={logo} alt="Henry Aviles Logo" width={50} />
      </div>
      <div className={styles.links}>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
