import styles from "./About.module.css";

export default function About() {
  return (
    <div className={`${styles.container} ${styles.pad5}`}>
      <h1 className={styles.heading}>About</h1>
      <p className={styles.para}>
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
    </div>
  );
}
