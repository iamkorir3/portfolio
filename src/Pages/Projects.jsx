import Navigation from "../components/Navigation";
import styles from "./Projects.module.css";
import Myprojects from "../components/Myprojects";

function Projects() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Myprojects />
    </div>
  );
}

export default Projects;
