import React from "react";
import { useState, useEffect } from "react";
import meHiking from "@/assets/meHiking.png";
import meHikingFore from "@/assets/meHikingFore.png";
import styles from "@/styles/aboutMe.module.css";
import { useScroll } from "@/components/hooks/ScrollContextProvider";
import parralaxback from "@/assets/parralaxBack.png";
import parralaxfore from "@/assets/parralaxFore.png";

function AboutMe() {
  const { scrollY } = useScroll();
  const [opacityAmt, setOpacityAmt] = useState();
  const [scaleAmt, setScaleAmt] = useState();

  useEffect(() => {
    const scrollAmt = window.scrollY - window.innerHeight;
    setOpacityAmt(scrollAmt * 0.2);
    setScaleAmt(Math.min(Math.max(scrollAmt * 0.0001 + 1, 1), 1.1));
  }, [scrollY]);

  return (
    <section className={styles.aboutMeContainer}>
      <div className={styles.stickyContainer}>
        <div
          className={styles.colorMask}
          style={{ opacity: `${opacityAmt}%` }}
        ></div>
        <div
          className={styles.scrollBg}
          style={{ backgroundImage: `url(${parralaxback.src})` }}
        >
          <div
            className={styles.scrollFg}
            style={{
              backgroundImage: `url(${parralaxfore.src})`,
              transform: `scale(${scaleAmt}`,
            }}
          ></div>
        </div>
      </div>
      <div tabIndex={0} className={styles.textContainer}>
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
