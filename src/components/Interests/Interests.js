import styles from "../About/About.module.css";

export default function Interests() {
  return (
    <div className={`${styles.container} ${styles.pad5}`}>
      <h1 className={styles.heading}>Interests</h1>
      <p className={styles.para}>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  );
}
