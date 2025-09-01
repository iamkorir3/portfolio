import styles from "./Aboutcompo.module.css";
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
    <div className={styles.imgContainer}>
      <img className={styles.myImg} src="me5.png" alt="my pic" />
    </div>
  );
}

function InfoMe() {
  return (
    <>
      <div className={styles.myInfo}>
        <div>
          <h2>
            <ion-icon name="information-outline"></ion-icon> Who Am I
          </h2>
          <p>
            I am a frontend developer who crafts responsive, interactive and
            clean UIs. <br></br>
            With a background in Computer Technology (still student). i blend
            design sense with technical logic.
          </p>
        </div>
        <div>
          <h2>
            <ion-icon name="bulb-outline"></ion-icon> My Approach
          </h2>
          <p>
            I am a frontend developer who crafts responsive, interactive and
            clean UIs. <br></br>
            With a background in Computer Technology (still student). i blend
            design sense with technical logic.
          </p>
        </div>
      </div>
    </>
  );
}
