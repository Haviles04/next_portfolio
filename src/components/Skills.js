import React from "react";
import { useState, useRef } from "react";
import styles from "@/styles/skills.module.css";
import Image from "next/image";
import CSS from "@/assets/icons8-css3-240.png";
import GIT from "@/assets/icons8-git-240.png";
import HTML from "@/assets/icons8-html-5-240.png";
import JS from "@/assets/icons8-javascript-240.png";
import REACT from "@/assets/icons8-react-200.png";
import REDUX from "@/assets/icons8-redux-240.png";
import TAILWIND from "@/assets/icons8-tailwindcss-240.png";
import TS from "@/assets/icons8-typescript-240.png";
import VUE from "@/assets/icons8-vue-js-240.png";
import NEXT from "@/assets/icons8-next.js-240.png";

function Skills() {
  const [transitionAmt, setTransitionAmt] = useState();
  const scrollContainer = useRef();
  const handleScroll = () => {
    console.log("hi");
    let value =
      (scrollContainer.current.scrollTop /
        (scrollContainer.current.scrollHeight -
          scrollContainer.current.clientHeight)) *
      -1;

    if (value === 0 || value === -1) return;
    setTransitionAmt(
      (scrollContainer.current.scrollTop /
        (scrollContainer.current.scrollHeight -
          scrollContainer.current.clientHeight)) *
        -1
    );
  };

  return (
    <section
      className={styles.container}
      onScroll={handleScroll}
      ref={scrollContainer}
    >
      <div className={styles.filler}>
        <div
          className={styles.colorMask}
          style={{
            opacity: `${transitionAmt * -100}%`,
          }}
        ></div>
        <div
          className={styles.skillsContainer}
          style={{
            width: `${transitionAmt * -100}%`,
            opacity: `${transitionAmt * -100}%`,
          }}
        >
          <h1>Skills</h1>
          <div className={styles.firstRow}>
            <Image src={HTML} width={150} alt="css logo" />
            <Image src={CSS} width={150} alt="css logo" />
            <Image src={JS} width={150} alt="css logo" />
            <Image src={TS} width={150} alt="css logo" />
          </div>
          <div className={styles.secondRow}>
            <Image src={REACT} width={150} alt="css logo" />
            <Image src={REDUX} width={150} alt="css logo" />
            <Image src={NEXT} width={150} alt="css logo" />
            <Image src={TAILWIND} width={150} alt="css logo" />
          </div>
        </div>
      </div>
      <div
        className={styles.thirdRow}
        style={{ opacity: `${transitionAmt * -100}%` }}
      >
        <Image src={VUE} width={150} alt="css logo" />
        <Image src={GIT} width={150} alt="css logo" />
      </div>
    </section>
  );
}

export default Skills;
