import Navigation from "../components/Navigation";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.container}>
      <Navigation />
      <h1>my home</h1>
    </div>
  );
}

export default Home;
