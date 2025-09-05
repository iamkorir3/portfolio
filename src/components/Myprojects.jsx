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
      <ProjectCard>
        <h2>WorldWise</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio
          cupiditate et exercitationem! Veniam asperiores culpa fuga sed ipsum,
          .
        </p>
      </ProjectCard>
      <ProjectCard>
        <h2>Ecommerce</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio
          cupiditate et exercitationem! Veniam asperiores culpa fuga sed ipsum,
          .
        </p>
      </ProjectCard>
      <ProjectCard>
        <h2>UsePopcorn</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio
          cupiditate et exercitationem! Veniam asperiores culpa fuga sed ipsum,
          .
        </p>
      </ProjectCard>
      <ProjectCard>
        <h2>React Quiz</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio
          cupiditate et exercitationem! Veniam asperiores culpa fuga sed ipsum,
          .
        </p>
      </ProjectCard>
      <ProjectCard>
        <h2>Eat and Split</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio
          cupiditate et exercitationem! Veniam asperiores culpa fuga sed ipsum,
          .
        </p>
      </ProjectCard>
      <ProjectCard>
        <h2>To Do List</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio
          cupiditate et exercitationem! Veniam asperiores culpa fuga sed ipsum,
          .
        </p>
      </ProjectCard>
    </div>
  );
}
function ProjectCard({ children }) {
  return <div className={styles.projectsCard}>{children}</div>;
}
