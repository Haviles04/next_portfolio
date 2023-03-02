import React from "react";
import { useState, useEffect } from "react";
import meHiking from "@/assets/meHiking.png";
import meHikingFore from "@/assets/meHikingFore.png";
import styles from "@/styles/aboutMe.module.css";
import { useScroll } from "@/components/hooks/ScrollContextProvider";

function AboutMe() {
  const { scrollY } = useScroll();
  const [transitionAmt, setTransitionAmt] = useState();

  useEffect(() => {
    setTransitionAmt(window.scrollY - window.innerHeight);
  }, [scrollY]);

  return (
    <section className={styles.aboutMeContainer}>
      <div className={styles.stickyContainer}>
        <div
          className={styles.colorMask}
          style={{ opacity: `${transitionAmt * 0.2}%` }}
        ></div>
        <div
          className={styles.scrollBg}
          style={{ backgroundImage: `url(${meHiking.src})` }}
        >
          <div
            className={styles.scrollFg}
            style={{
              transform: `scale(${Math.min(
                Math.max(transitionAmt * 0.0001 + 1, 1),
                1.1
              )}`,
              backgroundImage: `url(${meHikingFore.src})`,
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
