import styles from "./Myskills.module.css";

const skills = [
  {
    title: "Frontend",
    text: "Client-side development",
    skils: ["React", "HTML5", "CSS3", "Next JS", "Tailwind CSS"],
  },

  {
    title: "Backend",
    text: "Sever-side development",
    skils: ["MongoDB", "Supabase"],
  },

  {
    title: "Tools & Platforms",
    text: "Development tools",
    skils: ["Git", "Github ", " VS Code", "Intellij ide", "Vercel"],
  },
];

export default function Myskills() {
  return (
    <div className={styles.container}>
      <div className={styles.skillheader}>
        <h2>Programming Language</h2>

        <p>
          These are the languages that i have learned as frontend developer and
          others in school.
        </p>
      </div>
      <Skiils />
    </div>
  );
}

function Skiils() {
  return (
    <div className={styles.skillcontainer}>
      <div className={styles.codepic}>
        <img src="/code.jpg" alt="code" />
      </div>
      <div className={styles.Myskillss}>
        {skills.map((skill, index) => (
          <SkillCard skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
}

function SkillCard({ skill }) {
  const { text, title, skils } = skill;
  return (
    <div className={styles.skill}>
      <div className={styles.skillHead}>
        <h3>{title}</h3>
        <p>{text}</p>
        <div
          style={{ display: "flex", rowGap: "2rem" }}
          className={styles.skillspar}
        >
          {skils.map((myskill, idx) => (
            <p key={idx} style={{ color: "white", fontSize: "1.5rem" }} className={styles.skillitem}>
              {myskill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
