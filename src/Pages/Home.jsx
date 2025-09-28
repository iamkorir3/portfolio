import Homepage from "../components/Homepage";
import Navigation from "../components/Navigation";
import styles from "./Home.module.css";
import Aboutcompo from "../components/Aboutcompo";
import Myprojects from "../components/Myprojects";
import Myskills from "../components/Myskills";
import Mytestimonial from "../components/Mytestimonial";
import ContactMe from "../components/ContactMe";

function Home() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Homepage />
      <Aboutcompo />
      <Myprojects />
      <Myskills />
      <Mytestimonial />
      <ContactMe />
    </div>
  );
}

export default Home;
