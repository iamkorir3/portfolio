import styles from "./Myskills.module.css";

const skills = [
  {
    name: "HTML5",
    strength: 10,
    logo: <ion-icon name="logo-html5"></ion-icon>,
    time: "1 year + Experience",
  },
  {
    name: "CSS3",
    strength: 10,
    logo: <ion-icon name="logo-css3"></ion-icon>,
    time: "1 year + Experience",
  },
  {
    name: "JAVASCRIPT",
    strength: 10,
    logo: <ion-icon name="logo-javascript"></ion-icon>,
    time: "1/2 year + Experience",
  },
  {
    name: "REACT",
    strength: 10,
    logo: <ion-icon name="logo-react"></ion-icon>,
    time: "6 MONTHS + Experience",
  },
  { name: "C", strength: 10, logo: <p>tye</p>, time: "1 year + Experience" },
  { name: "C++", strength: 10, logo: <p>tye</p>, time: "1 year + Experience" },
  { name: "JAVA", strength: 10, logo: <p>tye</p>, time: "1 year + Experience" },
];

export default function Myskills() {
  return (
    <div className={styles.container}>
      {skills.map((skill, index) => (
        <SkillCard skill={skill} key={index} />
      ))}
    </div>
  );
}

function SkillCard({ skill }) {
  const { name, strength, logo, time } = skill;
  return (
    <div className={styles.skill}>
      <p>{logo}</p>
      <h3>{name}</h3>
      <p>{time}</p>
      <div>{strength}</div>
    </div>
  );
}
