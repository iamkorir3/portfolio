import styles from "./ContactMe.module.css";

export default function ContactMe() {
  return (
    <div className={styles.container}>
      <div>
        <h2>About Me</h2>
        <p>Discover More about me, story behind my Work</p>
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
    <div>
      <h2>{title}</h2>
    </div>
  );
}
