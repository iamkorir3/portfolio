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
          <img
            className={styles.projectImg}
            src="worldwise.png"
            alt="worlwiis"
          />
          <div className={styles.projectLinks}>
            <a href="https://use-popcorn-henna-eta.vercel.app/">{"</>"}Code</a>
            <a href="https://use-popcorn-henna-eta.vercel.app/">🚀Live</a>
          </div>
        </ProjectCard>
        <ProjectCard>
          <p></p>
          <h2>Ecommerce</h2>
          <img className={styles.projectImg} src="usepop.png" alt="worlwiis" />
          <div className={styles.projectLinks}>
            <a href="https://github.com/iamkorir3/Use-popcorn"> {"</>"} Code</a>
            <a href="https://ecommerce-kappa-one-67.vercel.app/">🚀Live</a>
          </div>
        </ProjectCard>
        <ProjectCard>
          <p></p>
          <h2>UsePopcorn</h2>
          <img
            className={styles.projectImg}
            src="worldwise.png"
            alt="worlwiis"
          />
          <div className={styles.projectLinks}>
            <a href="https://github.com/iamkorir3/Use-popcorn">{"</>"} Code</a>
            <a href="https://github.com/iamkorir3/Use-popcorn">🚀Live</a>
          </div>
        </ProjectCard>
        <ProjectCard>
          <p></p>
          <h2>React Quiz</h2>
          <img
            className={styles.projectImg}
            src="worldwise.png"
            alt="worlwiis"
          />
          <div className={styles.projectLinks}>
            <a href="https://github.com/iamkorir3/Use-popcorn">{"</>"} Code</a>
            <a href="https://github.com/iamkorir3/Use-popcorn">🚀Live</a>
          </div>
        </ProjectCard>
        <ProjectCard>
          <p></p>
          <h2>Eat and Split</h2>
          <img
            className={styles.projectImg}
            src="worldwise.png"
            alt="worlwiis"
          />
          <div className={styles.projectLinks}>
            <a href="https://github.com/iamkorir3/Use-popcorn">{"</>"} Code</a>
            <a href="https://github.com/iamkorir3/Use-popcorn">🚀Live</a>
          </div>
        </ProjectCard>
        <ProjectCard className={styles.toDolist}>
          <p></p>
          <h2>To Do List</h2>
          <img
            className={styles.projectImg}
            src="worldwise.png"
            alt="worlwiis"
          />
          <div className={styles.projectLinks}>
            <a href="https://github.com/iamkorir3/Use-popcorn">{"</>"} Code</a>
            <a href="https://github.com/iamkorir3/Use-popcorn">🚀Live</a>
          </div>
        </ProjectCard>
      </>
    </div>
  );
}
function ProjectCard({ children }) {
  return (
    <div className={styles.projectsCard}>
      <>
        {children}
        <div className={styles.aboutProject}></div>
      </>
    </div>
  );
}
