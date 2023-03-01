import React from "react";
import { useRef } from "react";
import useTransitionAmount from "./hooks/useTransitionAmount";
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
  const skillsScrollContainer = useRef();
  const transitionAmt = useTransitionAmount(skillsScrollContainer);

  return (
    <section className={styles.container} ref={skillsScrollContainer}>
      <div className={styles.stickyContainer}>
        <div
          className={styles.colorMask}
          style={{
            opacity: `${transitionAmt * 150}%`,
          }}
        ></div>

        <div className={styles.bgFiller}></div>

        <div
          className={styles.skillsContainer}
          style={{
            opacity: `${transitionAmt * 300}%`,
          }}
        >
          <h1>Skills</h1>
          <div className={styles.skillRow}>
            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={HTML} width={150} alt="css logo" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={CSS} width={150} alt="css logo" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={JS} width={150} alt="css logo" />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={TS} width={150} alt="css logo" />
            </a>
          </div>
          <div className={styles.skillRow}>
            <a
              href="https://reactjs.org/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={REACT} width={150} alt="css logo" />
            </a>
            <a
              href="https://redux.js.org/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={REDUX} width={150} alt="css logo" />
            </a>
            <a
              href="https://nextjs.org/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={NEXT} width={150} alt="css logo" />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={TAILWIND} width={150} alt="css logo" />
            </a>
          </div>
          <div className={styles.skillRow}>
            <a
              href="https://vuejs.org/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={VUE} width={150} alt="css logo" />
            </a>

            <a
              href="https://git-scm.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={GIT} width={150} alt="css logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
