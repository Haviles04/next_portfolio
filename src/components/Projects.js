import React from "react";
import { useRef } from "react";
import styles from "@/styles/projects.module.css";
import useTransitionAmount from "./hooks/useTransitionAmount";

function Projects() {
  const projectScrollContainer = useRef();
  const transitionAmt = useTransitionAmount(projectScrollContainer);
  return (
    <section className={styles.container} ref={projectScrollContainer}>
      <div className={styles.stickyContainer}>
        <h1>Projects</h1>
        <div className={styles.projectContainer}>
          <div
            className={`${styles.realFakeStore} ${styles.project}`}
            style={{ transform: `scale(${transitionAmt + 0.75})` }}
          ></div>
          <div
            className={`${styles.watched} ${styles.project}`}
            style={{ transform: `scale(${transitionAmt + 0.75})` }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
