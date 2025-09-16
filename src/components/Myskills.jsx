import styles from "./Myskills.module.css";

const skills = [
  { name: "HTML5", strength: 10, logo: <p>tye</p>, time: "1 year +" },
  { name: "CSS3", strength: 10, logo: <p>tye</p>, time: "1 year +" },
  { name: "JAVASCRIPT", strength: 10, logo: <p>tye</p>, time: "1/2 year +" },
  { name: "REACT", strength: 10, logo: <p>tye</p>, time: "6 MONTHS +" },
  { name: "VS CODE", strength: 10, logo: <p>tye</p>, time: "1 year +" },
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
