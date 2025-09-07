import styles from "./Mytestimonial.module.css";
export default function Mytestimonial() {
  return (
    <div className={styles.container}>
      <div className={styles.tesiHeader}>
        <h2> What people say </h2>
        <p>
          Reviews from clients,collaborators, classmates and friends who have
          experienced my work.
        </p>
      </div>
      <TestimonialCard />
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className={styles.tesiCard}>
      <h2>Name: korir emmanuel</h2>
    </div>
  );
}
