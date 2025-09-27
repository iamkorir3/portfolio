import styles from "./Myskills.module.css";

const skills = [
  {
    name: "HTML5",
    strength: 10,
    logo: <ion-icon color="red" name="logo-html5"></ion-icon>,
    time: "1 year + Experience",
  },
  {
    name: "CSS3",
    strength: 10,
    logo: <ion-icon color="purple" name="logo-css3"></ion-icon>,
    time: "1 year + Experience",
  },
  {
    name: "  JAVASCRIPT",
    strength: 10,
    logo: <ion-icon color="yellow" name="logo-javascript"></ion-icon>,
    time: "3/4 year + Experience",
  },
  {
    name: "REACT",
    strength: 10,
    logo: <ion-icon color="blue" name="logo-react"></ion-icon>,
    time: "6 months + Experience",
    color: "",
  },
  { name: "C", strength: 10, logo: <p>C</p>, time: "1 year + Experience" },
  { name: "C++", strength: 10, logo: <p>C++</p>, time: "1 year + Experience" },
  {
    name: "JAVA",
    strength: 10,
    logo: <p>🍵</p>,
    time: "6 months + Experience",
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
  const { name, strength, logo, time, color } = skill;
  return (
    <div className={styles.skill}>
      <div className={styles.skillHead}>
        <p style={{ color: color }}>{logo}</p>
        <h3>{name}</h3>
      </div>
      <p style={{ color: "white", fontSize: "2rem" }}>{time}</p>
      <div>{strength}</div>
    </div>
  );
}
