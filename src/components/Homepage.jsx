import styles from "./Homepage.module.css";
export default function Homepage() {
  return (
    <div className={styles.container}>
      <Mydetails />
    </div>
  );
}

function Mydetails() {
  return (
    <div>
      <h1>i am Korir Emmanuel</h1>
    </div>
  );
}
