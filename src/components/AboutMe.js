import React from "react";
import useTransitionAmount from "@/components/hooks/useTransitionAmount";
import { useRef } from "react";

import styles from "@/styles/aboutMe.module.css";

function AboutMe() {
  const scrollContainer = useRef();
  const transitionAmt = useTransitionAmount(scrollContainer);

  return (
    <section ref={scrollContainer} className={styles.aboutMeContainer}>
      <div className={styles.stickyContainer}>
        <div
          className={styles.colorMask}
          style={{ opacity: `${transitionAmt * 100}%` }}
        ></div>
        <div className={styles.scrollBg}>
          <div
            className={styles.scrollFg}
            style={{
              animationDelay: `${transitionAmt * -2}s`,
            }}
          ></div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <h2>About Me.</h2>
          <br />
          <h4>Ironworker. Rock climber. Sim racer. Mountain biker.</h4>
          <br />
          <p>
            Highly motivated, self driven Front end Developer passionate about
            learning new technologies, and pushing personal boundaries of
            development skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
