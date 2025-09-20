import styles from "./ContactMe.module.css";

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
  const accountss = [
    { title: "GITHUB" },
    { title: "LINKEDIN" },
    { title: "LEETCODE" },
    { title: "TWITTER" },
    { title: "INSTAGRAM" },
  ];
  return (
    <div>
      {accountss.map((account, index) => (
        <Accounts account={account} key={index} />
      ))}
    </div>
  );
}

function Accounts({ account }) {
  const { title } = account;
  return (
    <div className={styles.Mylinks}>
      <h3>{title}</h3>
    </div>
  );
}
