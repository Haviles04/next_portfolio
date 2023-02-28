import React from "react";
import Image from "next/image";
import styles from "@/styles/header.module.css";
import { CgChevronDoubleDown } from "react-icons/cg";
import henryBitmoji from "@/assets/henryBitmoji.png";

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.outerImgContainer}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.bitmoji}
            src={henryBitmoji}
            alt="Henry Aviles Logo"
            width={500}
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <h1>Henry Aviles</h1>
        <h2>Front End Developer</h2>
      </div>
      <CgChevronDoubleDown size={48} className={styles.chevron} />
    </header>
  );
}

export default Header;
