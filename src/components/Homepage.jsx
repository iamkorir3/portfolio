import styles from "./Homepage.module.css";
export default function Homepage() {
  return (
    <div className={styles.container}>
      <Mydetails />
      <PictureSkills />
    </div>
  );
}

function Mydetails() {
  return (
    <div className={styles.detailContainer}>
      <h1>
        {" "}
        Hi, I Am Korir <br />
        Emmanuel
      </h1>
      <h2>Frontend Developer</h2>
      <p>
        I build modern, responsive web apps with clean UI and smooth <br />
        Ux blending design and code to create experiences that feel intuitive,
        <br />
        fast and delightful to use.
      </p>
      <SocialProfiles />
    </div>
  );
}

function PictureSkills() {
  return (
    <div className={styles.profile}>
      <img src="/me3.jpg" alt="my pic" />
      <div className={styles.js}>
        <ion-icon name="logo-nodejs"></ion-icon>
      </div>
      <ion-icon name="logo-css3"></ion-icon>
      <ion-icon name="logo-react"></ion-icon>
      <ion-icon name="logo-html5"></ion-icon>
    </div>
  );
}

function SocialProfiles() {
  return (
    <div className={styles.SocialProfiles}>
      <p>Follow me on: </p>
      <div className={styles.socialLinks}>
        <ion-icon name="logo-github"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
      </div>
    </div>
  );
}
