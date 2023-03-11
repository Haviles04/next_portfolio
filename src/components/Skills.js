import React from "react";
import { useState, useEffect } from "react";
import styles from "@/styles/skills.module.css";
import starrySky from "@/assets/starrySky.png";
import roadLights from "@/assets/lights.jpg";
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
import { useScroll } from "./hooks/ScrollContextProvider";

function Skills() {
  const { scrollY } = useScroll();
  const [opacityAmt, setOpacityAmt] = useState();
  const [scaleAmt, setScaleAmt] = useState();

  useEffect(() => {
    const scrollAmt = window.scrollY - window.innerHeight * 3;

    setOpacityAmt(scrollAmt * 0.2);

    setScaleAmt(Math.min(Math.max(scrollAmt * 0.001, 0), 1));
  }, [scrollY]);

  return (
    <section className={styles.container}>
      <div className={styles.stickyContainer}>
        <div
          className={styles.stickyBackground}
          style={{
            backgroundImage: `url(${roadLights.src})`,
          }}
        ></div>
        <div
          className={styles.colorMask}
          style={{
            opacity: `${opacityAmt}%`,
          }}
        ></div>

        <div className={styles.bgFiller}></div>

        <div
          tabIndex={0}
          className={styles.skillsContainer}
          style={{
            opacity: `${opacityAmt}%`,
            transform: `scale(${scaleAmt})`,
          }}
        >
          <h3>Skills</h3>
          <div className={styles.skillRow}>
            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={HTML} width={150} alt="html logo" />
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
              <Image src={JS} width={150} alt="javascript logo" />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={TS} width={150} alt="typescript logo" />
            </a>
          </div>
          <div className={styles.skillRow}>
            <a
              href="https://reactjs.org/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={REACT} width={150} alt="react logo" />
            </a>
            <a
              href="https://redux.js.org/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={REDUX} width={150} alt="redux logo" />
            </a>
            <a
              href="https://nextjs.org/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={NEXT} width={150} alt="next logo" />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={TAILWIND} width={150} alt="tailwind CSS logo" />
            </a>
          </div>
          <div className={styles.skillRow}>
            <a
              href="https://vuejs.org/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={VUE} width={150} alt="vue logo" />
            </a>

            <a
              href="https://git-scm.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image src={GIT} width={150} alt="git logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
