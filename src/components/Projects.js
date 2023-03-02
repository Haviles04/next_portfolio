import React from "react";
import { useState, useEffect } from "react";
import styles from "@/styles/projects.module.css";
import useScrollY from "./hooks/useScrollY";

function Projects() {
  const { scrollY } = useScrollY();
  const [scaleAmt, setScaleAmt] = useState(0);

  useEffect(() => {
    setScaleAmt(
      Math.min(
        Math.max((scrollY - window.innerHeight * 5) * 0.0001 + 1, 1),
        1.1
      )
    );
  }, [scrollY]);

  return (
    <section className={styles.container}>
      <div className={styles.stickyContainer}>
        <h1>Most Recent Projects</h1>
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
