import React from "react";
import { useState, useEffect } from "react";
import styles from "@/styles/cuttle.module.css";
import { useScroll } from "./hooks/ScrollContextProvider";
import CuttleLogo from "../assets/cuttleLogo.png";
import Image from "next/image";
import GITHUB from "@/assets/icons8-github-240.png";

function Cuttle() {
  const { scrollY } = useScroll();
  const [scaleAmt, setScaleAmt] = useState(0);
  const [widthAmt, setWidthAmt] = useState(0);

  useEffect(() => {
    const scrollAmt = scrollY - window.innerHeight * 7;
    setScaleAmt(Math.min(Math.max(scrollAmt * 0.0001 + 1, 1), 1.1));
    setWidthAmt(Math.min(Math.max(scrollAmt * 0.1, 0), 100));
  }, [scrollY]);

  console.log(scaleAmt);

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
            {" "}
            Core Team Member and full stack developer of the Open source battle
            card game{" "}
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
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cuttle;
