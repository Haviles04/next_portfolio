import React from "react";
import Image from "next/image";
import styles from "@/styles/contact.module.css";
import GITHUB from "@/assets/icons8-github-240.png";
import GMAIL from "@/assets/icons8-gmail-logo-240.png";
import LINKEDIN from "@/assets/icons8-linkedin-240.png";

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h1>Lets get in touch!</h1>
      <a href="mailto:haviles04@gmail.com">
        <Image src={GMAIL} alt="gmail logo" width={200} />
      </a>
      <a
        href="https://github.com/Haviles04"
        target="blank"
        rel="noopener noreferrer"
      >
        <div className={styles.githubBg}>
          <Image src={GITHUB} alt="github logo" width={200} />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/henry-aviles-4b020a252/"
        target="blank"
        rel="noopener noreferrer"
      >
        <Image src={LINKEDIN} alt="LinkedIn logo" width={200} />
      </a>
    </section>
  );
}

export default Contact;
