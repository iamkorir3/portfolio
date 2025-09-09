import { useState } from "react";
import styles from "./Mytestimonial.module.css";
export default function Mytestimonial() {
  const [addTestimony, setaddTestimony] = useState(false);

  function handleAddTestimony() {
    setaddTestimony(true);
  }
  return (
    <div className={styles.container}>
      <div className={styles.tesiHeader}>
        <h2> What people say </h2>
        <p>
          Reviews from clients,collaborators, classmates and friends who have
          experienced my work.
        </p>
      </div>
      <AddTestimonial onAddtest={handleAddTestimony} />
      <TestimonialCard />
      {addTestimony && <Form />}
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
function AddTestimonial({ onAddtest }) {
  return (
    <div className={styles.testmonialBtn}>
      <h3>
        <ion-icon name="mail-outline"></ion-icon> Testimonials
      </h3>
      <button onClick={onAddtest}>
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
  return (
    <div className={styles.form}>
      <form className={styles.myform}>
        <div>
          <label>Full Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Position</label>
          <input type="text" />
        </div>
        <div>
          <label>Testimonial</label>
          <input type="text" />
        </div>
        <div className={styles.formBtn}>
          <button>Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
