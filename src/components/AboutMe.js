import React from "react";
import { useState, useRef, useEffect } from "react";

import styles from "@/styles/aboutMe.module.css";

function AboutMe() {
  const [transitionAmt, setTransitionAmt] = useState();
  const scrollContainer = useRef();

  const handleScroll = () => {
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
      tabIndex="0"
      onScroll={handleScroll}
      ref={scrollContainer}
      className={styles.aboutMeContainer}
      style={{
        backgroundColor: `rgba(56, 105, 72, ${Math.abs(transitionAmt * 0.75)})`,
      }}
    >
      <div
        className={styles.scrollBg}
        style={{ animationDelay: `${transitionAmt}s` }}
      >
        <div
          className={styles.scrollFg}
          style={{ animationDelay: `${transitionAmt}s` }}
        ></div>
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
