import styles from "./ContactMe.module.css";
import { Link } from "react-router-dom";

export default function ContactMe() {
  return (
    <div className={styles.container}>
      <div className={styles.contactTitle}>
        <h2>Contact Me</h2>
        <p>Reach out to me via form, social media and links provided.</p>
        <MyAccounts />
      </div>
    </div>
  );
}

function MyAccounts() {
  // const accountss = [
  //   { title: "GITHUB" },
  //   { title: "LINKEDIN" },
  //   { title: "LEETCODE" },
  //   { title: "TWITTER" },
  //   { title: "INSTAGRAM" },
  // ];
  return (
    <div className={styles.Mylinks}>
      {/* {accountss.map((account, index) => (
        <Accounts account={account} key={index} />
      ))} */}
      <Accounts>
        <div className={styles.iconName}>
          <ion-icon name="logo-github"></ion-icon>

          <div>
            <h3>Github</h3>
            <p>Explore code & projects</p>
          </div>
        </div>
        <Link className={styles.linkBtn}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link>
      </Accounts>
      <Accounts>
        <div className={styles.iconName}>
          <ion-icon name="logo-github"></ion-icon>
          <div>
            <h3>LinkedIn</h3>
            <p>Connect with me proffesionally</p>
          </div>
        </div>
        <Link className={styles.linkBtn}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link>
      </Accounts>
      <Accounts>
        <div className={styles.iconName}>
          <ion-icon name="logo-github"></ion-icon>
          <div>
            <h3>Leetcode</h3>
            <p>Check my code code test</p>
          </div>
        </div>
        <Link className={styles.linkBtn}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link>
      </Accounts>
      <Accounts>
        <div className={styles.iconName}>
          <ion-icon name="logo-github"></ion-icon>

          <div>
            <h3>Instagram</h3>
            <p>Life updates</p>
          </div>
        </div>
        <Link className={styles.linkBtn}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link>
      </Accounts>
      <Accounts>
        <div className={styles.iconName}>
          <ion-icon name="logo-github"></ion-icon>
          <div>
            <h3>Twitter</h3>
            <p>Random post & tweets</p>
          </div>
        </div>
        <Link className={styles.linkBtn}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link>
      </Accounts>
    </div>
  );
}

function Accounts({ children }) {
  // const { title } = account;
  return (
    <div className={styles.myLink}>
      <>{children}</>
    </div>
  );
}
