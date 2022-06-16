import React from "react";
import profilePic from "../../images/profile-pic.png";
import mailIcon from "../../images/Mail.png";
import linkedinIcon from "../../images/linkedin.png";
import styles from "./profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <img
        className={`${styles["profile-img"]}`}
        src={profilePic}
        alt="profile-pic"
      ></img>
      <h1 className={`${styles["profile-name"]}`}>Laura Smith</h1>
      <p className={`${styles["profile-role"]}`}>Frontend Developer</p>
      <p className={`${styles["profile-mail"]}`}>laurasmith.website</p>
      <div className={styles.buttons}>
        <a className={`${styles.button} ${styles.email}`} href="#">
          <img src={mailIcon} alt="Mail-Icon"></img> Email
        </a>
        <a className={`${styles.button} ${styles.linkedin}`} href="#">
          <img src={linkedinIcon} alt="LinkedIn-Icon"></img>LinkedIn
        </a>
      </div>
    </div>
  );
}
