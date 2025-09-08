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
      <AddTestimonial />
      <TestimonialCard />
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className={styles.tesiCard}>
      <PersonCard />
      {/* <PersonCard />
      <PersonCard />
      <PersonCard />
      <PersonCard /> */}
    </div>
  );
}
function AddTestimonial() {
  return (
    <div className={styles.testmonialBtn}>
      <h3>
        <ion-icon name="mail-outline"></ion-icon> Testimonials
      </h3>
      <button>
        + {/* <ion-icon name="add-circle-outline"></ion-icon> */}
        Add Testimonial
      </button>
    </div>
  );
}

function PersonCard() {
  return (
    <div className={styles.personCard}>
      <div className={styles.review}>
        <h3>
          <ion-icon name="chatbubble-ellipses-outline"></ion-icon> Testimony
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
          pariatur maiores. Voluptate incidunt aut dolorum.
        </p>
        <p className={styles.ratings}>⭐⭐⭐⭐⭐</p>
      </div>
      <div className={styles.testifier}>
        <div className={styles.nameInitials}>KE</div>
        <div>
          <h2>korir emmanuel</h2>
          <p>designation</p>
        </div>
      </div>
    </div>
  );
}

// **************
// Testimonial Form

function Form() {
  return;
}
