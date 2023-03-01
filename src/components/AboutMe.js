import React from "react";
import useTransitionAmount from "@/components/hooks/useTransitionAmount";
import { useRef } from "react";
import meHiking from "@/assets/meHiking.png";
import meHikingFore from "@/assets/meHikingFore.png";
import styles from "@/styles/aboutMe.module.css";

function AboutMe() {
  const aboutScrollContainer = useRef();
  const transitionAmt = useTransitionAmount(aboutScrollContainer);

  return (
    <section ref={aboutScrollContainer} className={styles.aboutMeContainer}>
      <div className={styles.stickyContainer}>
        <div
          className={styles.colorMask}
          style={{ opacity: `${transitionAmt * 20}%` }}
        ></div>
        <div
          className={styles.scrollBg}
          style={{ backgroundImage: `url(${meHiking.src})` }}
        >
          <div
            className={styles.scrollFg}
            style={{
              backgroundImage: `url(${meHikingFore.src})`,
              animationDelay: `${transitionAmt * -1.1}s`,
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
