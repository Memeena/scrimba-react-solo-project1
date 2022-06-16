import twitterIcon from "../../images/twitter.png";
import facebookIcon from "../../images/facebook-square.png";
import instagramIcon from "../../images/instagram.png";
import githubIcon from "../../images/github.png";
import styles from "./Social.module.css";

export default function Social() {
  return (
    <div className={styles.social}>
      <img className={styles.socialimg} src={twitterIcon} alt="twitter-icon" />
      <img
        className={styles.socialimg}
        src={facebookIcon}
        alt="facebook-icon"
      />
      <img
        className={styles.socialimg}
        src={instagramIcon}
        alt="instagram-icon"
      />
      <img className={styles.socialimg} src={githubIcon} alt="github-icon" />
    </div>
  );
}
