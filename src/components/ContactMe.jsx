import { useState } from "react";
import styles from "./ContactMe.module.css";
import { Link } from "react-router-dom";

export default function ContactMe() {
  return (
    <div className={styles.container}>
      <div className={styles.contactTitle}>
        <h2>Contact Me</h2>
        <p>Reach out to me via form, social media and links provided.</p>
        <div className={styles.ctaBtn}>
          <button>
            <ion-icon name="mail-outline"></ion-icon> Contact Me
          </button>
          <button>
            <ion-icon name="heart-outline"></ion-icon> Support Me
          </button>
        </div>
        <div
          // style={{ display: "flex", gap: "4rem" }}
          className={styles.contactContiner}
        >
          <MyAccounts />

          <ContactForm />
        </div>
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
        <Link to="https://github.com/iamkorir3" className={styles.linkBtn}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link>
      </Accounts>
      <Accounts>
        <div className={styles.iconName}>
          <ion-icon name="logo-linkedin"></ion-icon>
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
          <ion-icon name="laptop-outline"></ion-icon>

          <div>
            <h3>Leetcode</h3>
            <p>Check my code test</p>
          </div>
        </div>
        <Link className={styles.linkBtn}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link>
      </Accounts>
      <Accounts>
        <div className={styles.iconName}>
          <ion-icon name="logo-instagram"></ion-icon>

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
          <ion-icon name="logo-twitter"></ion-icon>
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

function ContactForm() {
  const [messanger, setSessanger] = useState({
    naame: "",
    email: "",
    message: "",
  });

  const [messangers, setmessangers] = useState([messanger]);

  function handleMessngers(e) {
    e.preventDefault();
    setmessangers((prevItems) => {
      const newmessage = [...prevItems, messanger];
      return newmessage;
    });
    console.log(messangers);
  }

  function hanleSetnaame(value) {
    setSessanger({ ...messanger, naame: value });
  }
  function hanleSeteamil(value) {
    setSessanger({ ...messanger, email: value });
  }
  function hanleSetmessage(value) {
    setSessanger({ ...messanger, message: value });
  }
  return (
    <div className={styles.contactForm}>
      <h2>
        {" "}
        <ion-icon name="mail-outline"></ion-icon>Send me a message
      </h2>
      <form className={styles.myForm}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => hanleSetnaame(e.target.value)}
        />

        <input
          type="email"
          placeholder=" email address"
          onChange={(e) => hanleSeteamil(e.target.value)}
        />

        <textarea
          className={styles.textAre}
          onChange={(e) => hanleSetmessage(e.target.value)}
          placeholder="Your message"
        />

        <div className={styles.formBtn}>
          {/* <button>cancel</button> */}
          <button onClick={(e) => handleMessngers(e)}>
            Send <ion-icon name="send-outline"></ion-icon>
          </button>
        </div>
      </form>
    </div>
  );
}
