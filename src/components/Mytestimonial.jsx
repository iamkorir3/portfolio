import { useState } from "react";
import styles from "./Mytestimonial.module.css";

const testifiers = [
  { name: "Emamnuel korir", email: "2", position: "lec", testimony: "good" },
  { name: "Emamnuel ", email: "1", position: "dev", testimony: "great" },
];
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
      <TestimonialCard testifiers={testifiers} />
      {addTestimony && <Form />}
    </div>
  );
}

function TestimonialCard({ testifiers }) {
  console.log(testifiers);
  return (
    <div className={styles.tesiCard}>
      {testifiers.map((testifier) => (
        <PersonCard key={testifier.email} testifier={testifier} />
      ))}
      ;
      <PersonCard />
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

function PersonCard({ testifier }) {
  console.log(`${testifier} hello`);
  const { name, position, testimony } = testifier;
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
          <h2>{name}</h2>
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
    <>
      <div className={styles.form}>
        <div className={styles.formHeader}>
          {/* <h2>💡</h2> */}
          <h3>Share Your Testimony</h3>
          <p>Comment on your experience working with me.</p>
        </div>
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
    </>
  );
}
