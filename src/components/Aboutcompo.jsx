import styles from "./Aboutcompo.module.css";
export default function About() {
  return (
    <>
      <div className={styles.infoTitle}>
        <h2>About Me</h2>
        <p>Discover More about me, story behind my Work</p>
      </div>
      <div className={styles.container}>
        <Picture />
        <InfoMe />
      </div>
    </>
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
    <div>
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
            I focus on user-friendly design, <br></br> performance, and
            accessability always<br></br> evolving around modern techs to
            deliver <br></br>
            seamless Experience in my work.
          </p>
        </div>
      </div>

      <div className={styles.personalInfo}>
        <h2>Personal Information</h2>
        <div className={styles.myPersonalInfo}>
          <p>
            Name: <span>Korir Emmanuel</span>
          </p>
          <p>
            place of birth: <span>Bomet, Kenya</span>
          </p>
          <p>
            phone: <span>+254 712473905</span>
          </p>
          <p>
            Date of birth: <span>05/01/2006</span>
          </p>
          <p>
            Email: <span>iamkorir705@gmail.com</span>
          </p>
          <p>
            Education: <span> Meru University of Science and Technology</span>
          </p>
        </div>
      </div>
    </div>
  );
}
