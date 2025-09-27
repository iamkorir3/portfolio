import Homepage from "../components/Homepage";
import Navigation from "../components/Navigation";
import styles from "./Home.module.css";
import Aboutcompo from "../components/Aboutcompo";

function Home() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Homepage />
      <Aboutcompo />
    </div>
  );
}

export default Home;
