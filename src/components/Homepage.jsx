import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
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

      <div className={styles.ctaBtn}>
        <button>
          <span>
            <ion-icon name="caret-down-circle"></ion-icon>
          </span>{" "}
          Explore My Projects
        </button>
        <button>
          <span>
            <ion-icon name="mail"></ion-icon>
          </span>{" "}
          Download my CV
        </button>
      </div>

      <div className={styles.quickStats}>
        <div className={styles.quickStatstitle}>
          <span>
            <ion-icon name="stats-chart"></ion-icon>
          </span>
          Quick stats
        </div>
        <div className={styles.quickStat}>
          <section style={{ flexDirection: "row" }}>
            <div>
              <ion-icon name="bar-chart"></ion-icon>{" "}
            </div>
            <div>
              <p> 1+ Years</p>
              <span>Experience</span>
            </div>
          </section>

          <section style={{ flexDirection: "row" }}>
            <div>
              <ion-icon name="logo-nodejs"></ion-icon>
            </div>

            <div>
              <p>Javascript</p>
              <span>Main languge</span>
            </div>
          </section>
          <section style={{ flexDirection: "row" }}>
            <div>
              <ion-icon name="code-slash"></ion-icon>
            </div>
            <div>
              <p>5 Projects</p>
              <span>Main projects</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SocialProfiles() {
  return (
    <div className={styles.SocialProfiles}>
      <p>Follow me on: </p>
      <div className={styles.socialLinks}>
        <Link>
          <ion-icon name="logo-github"></ion-icon>
        </Link>
        <Link>
          <ion-icon name="logo-twitter"></ion-icon>
        </Link>
        <Link>
          <ion-icon name="logo-facebook"></ion-icon>
        </Link>
        <Link>
          <ion-icon name="logo-instagram"></ion-icon>
        </Link>
      </div>
    </div>
  );
}

function PictureSkills() {
  return (
    <div className={styles.profile}>
      <div>
        <img className={styles.myImg} src="/me5.png" alt="my pic" />
      </div>
      <div className={styles.js}>
        <Link>
          <ion-icon name="logo-nodejs"></ion-icon>
        </Link>

        <Link>
          <ion-icon name="logo-css3"></ion-icon>
        </Link>
        <Link>
          <ion-icon name="logo-react"></ion-icon>
        </Link>
        <Link>
          <ion-icon name="logo-html5"></ion-icon>
        </Link>
      </div>
    </div>
  );
}
