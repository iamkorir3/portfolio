import styles from "./Homepage.module.css";
export default function About() {
  return (
    <div className={styles.container}>
      <Picture />
      <InfoMe />
    </div>
  );
}

function Picture() {
  return (
    <div>
      <img src="me5.png" alt="my pic" />
    </div>
  );
}

function InfoMe() {
  return (
    <div>
      <div>
        <h2>
          <ion-icon name="information-outline"></ion-icon> Who Am I
        </h2>
        <p>
          I am a frontend developer who crafts responsive, interactive and clean
          UIs. <br></br>
          With a background in Computer Technology (still student). i blend
          design sense with technical logic.
        </p>
      </div>
    </div>
  );
}
