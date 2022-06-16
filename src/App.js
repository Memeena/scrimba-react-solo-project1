import styles from "./App.module.css";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Interests from "./components/Interests/Interests";
import Social from "./components/Social/Social";

function App() {
  return (
    <div className={styles.App}>
      <div className={`${styles["card-container"]}`}>
        <Profile />
        <About className={styles.common} />
        <Interests />
        <Social />
      </div>
    </div>
  );
}

export default App;
