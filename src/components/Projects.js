import React from "react";
import { useState, useEffect } from "react";
import styles from "@/styles/projects.module.css";
import { useScroll } from "./hooks/ScrollContextProvider";

function Projects() {
  const { scrollY } = useScroll();
  const [scaleAmt, setScaleAmt] = useState(0);
  const [widthAmt, setWidthAmt] = useState(0);

  useEffect(() => {
    const scrollAmt = scrollY - window.innerHeight * 5;
    setScaleAmt(Math.min(Math.max(scrollAmt * 0.0001 + 1, 1), 1.1));
    setWidthAmt(Math.min(Math.max(scrollAmt * 0.1, 0), 100));
  }, [scrollY]);

  return (
    <section className={styles.container} id="projects">
      <div className={styles.stickyContainer}>
        <div
          tabIndex={0}
          className={styles.codeBg}
          style={{ width: `${widthAmt}%` }}
        ></div>
        <h2>Most Recent Projects</h2>
        <div className={styles.projectContainer}>
          <div
            className={`${styles.realFakeStore} ${styles.project}`}
            style={{
              transform: `scale(${scaleAmt}`,
            }}
          >
            <a
              href="https://real-fake-store.vercel.app/"
              target="blank"
              rel="noopener noreferrer"
            >
              <div className={styles.projectOverlay}>
                <p>E-commerce store built in Next.js</p>
              </div>
            </a>
          </div>

          <div
            className={`${styles.watched} ${styles.project}`}
            style={{
              transform: `scale(${scaleAmt}`,
            }}
          >
            <a
              href="https://uwatched.netlify.app/login"
              target="blank"
              rel="noopener noreferrer"
            >
              <div className={styles.projectOverlay}>
                <p>
                  Social media style movie tracker app built using Vue.js and
                  Supabase
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
