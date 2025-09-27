import Homepage from "../components/Homepage";
import Navigation from "../components/Navigation";
import styles from "./Home.module.css";
import Aboutcompo from "../components/Aboutcompo";
import Myprojects from "../components/Myprojects";
import Myskills from "../components/Myskills";

function Home() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Homepage />
      <Aboutcompo />
      <Myprojects />
      <Myskills />
    </div>
  );
}

export default Home;
