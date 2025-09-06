import { Children } from "react";
import styles from "./Myprojects.module.css";

export default function Myprojects() {
  return (
    <div className={styles.container}>
      <Projects />
    </div>
  );
}

function Projects() {
  return (
    <div className={styles.projects}>
      <>
        <ProjectCard>
          <p></p>
          <h2>WorldWise</h2>
        </ProjectCard>
        <ProjectCard>
          <p></p>
          <h2>Ecommerce</h2>
        </ProjectCard>
        <ProjectCard>
          <p></p>
          <h2>UsePopcorn</h2>
        </ProjectCard>
        <ProjectCard>
          <p></p>
          <h2>React Quiz</h2>
        </ProjectCard>
        <ProjectCard>
          <p></p>
          <h2>Eat and Split</h2>
        </ProjectCard>
        <ProjectCard className={styles.toDolist}>
          <p></p>
          <h2>To Do List</h2>
        </ProjectCard>
      </>
    </div>
  );
}
function ProjectCard({ children }) {
  return <div className={styles.projectsCard}>{children}</div>;
}
