import React from "react";
import styles from "@/styles/cuttle.module.css";
import CuttleLogo from "../assets/cuttleLogo.png";
import Image from "next/image";
import GITHUB from "@/assets/icons8-github-240.png";

function Cuttle() {

  return (
    <section className={styles.container} id="cuttle">
      <div className={styles.stickyContainer}>
        <div tabIndex={0} className={styles.cuttleBg}></div>
        <h2>Cuttle.cards</h2>
        <div className={styles.cuttleContainer}>
          <Image
            src={CuttleLogo}
            width={200}
            alt="Cuttle Logo"
            className={styles.cuttleLogo}
          />
          <p>
            Core Team Member and full stack developer of the Open source battle
            card game
          </p>
          <a href="https://www.cuttle.cards/#/" target="no_rel">
            Cuttle.cards
          </a>
          <a href="https://github.com/cuttle-cards/cuttle">
            <Image
              src={GITHUB}
              width={150}
              alt="github"
              className={styles.cuttleGH}
            />
          </a>
          <p className={styles.checkout}>Checkout the github!</p>
        </div>
      </div>
    </section>
  );
}

export default Cuttle;
