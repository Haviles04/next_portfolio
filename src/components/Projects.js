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
            style={{ animationDelay: `${transitionAmt * -1}s` }}
          >
            <div className={styles.projectOverlay}>
              <p>E-commerce store built in Next.js</p>
            </div>
          </div>
          <div
            className={`${styles.watched} ${styles.project}`}
            style={{ animationDelay: `${transitionAmt * -1}s` }}
          >
            <div className={styles.projectOverlay}>
              <p>
                Social media style movie tracker app built using Vue.js and
                Supabase
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
