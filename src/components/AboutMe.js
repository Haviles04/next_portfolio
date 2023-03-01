import React from "react";
import { useState, useRef, useEffect } from "react";

import styles from "@/styles/aboutMe.module.css";

function AboutMe() {
  const [transitionAmt, setTransitionAmt] = useState(0);
  const scrollContainer = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(addRemoveListener, {
      threshold: 1 / 3,
    });
    observer.observe(scrollContainer.current);
  });

  const addRemoveListener = ([entry]) => {
    if (entry.intersectionRatio >= 0.33333) {
      return ["wheel", "touchmove"].forEach((evt) =>
        window.addEventListener(evt, handleWheel)
      );
    }

    ["wheel", "touchmove"].forEach((evt) =>
      window.removeEventListener(evt, handleWheel)
    );
  };

  const handleWheel = () => {
    setTransitionAmt(
      Math.abs(
        scrollContainer.current.getBoundingClientRect().top / window.scrollY
      ) * 1.8
    );
  };

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
