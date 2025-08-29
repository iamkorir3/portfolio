import Homepage from "../components/Homepage";
import Navigation from "../components/Navigation";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Homepage />
    </div>
  );
}

export default Home;
