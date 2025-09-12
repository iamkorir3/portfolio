import { useState } from "react";
import styles from "./Mytestimonial.module.css";

const test = [
  {
    name: "Emamnuel korir",
    email: "2",
    position: "lec",
    testimony: "good",
    id: 1,
  },
  { name: "Emamnuel ", email: "1", position: "dev", testimony: "great", id: 2 },
];
const testifieer = {
  name: "Emamnuel ",
  email: "",
  position: "dev",
  testimony: "great",
};
export default function Mytestimonial() {
  const [testifiers, setTestifier] = useState([test]);
  const [testif, settestif] = useState({ testifieer });

  const [addTestimony, setaddTestimony] = useState(false);

  function handleForm(mytestifier) {
    settestif(mytestifier);
    setTestifier({ ...testifiers, mytestifier });
    console.log(mytestifier);
    console.log(testif);
  }

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
      {addTestimony && <Form onsubmit={handleForm} />}
    </div>
  );
}

function TestimonialCard({ testifiers }) {
  console.log(testifiers);
  return (
    <div className={styles.tesiCard}>
      {testifiers.map((person) => (
        <PersonCard
          //   name={name} { name, position, testimony, email }
          //   position={position}
          //   testimony={testimony}
          //   testifier={email}
          person={person}
          key={person.id}
        />
      ))}
      ;{/* <PersonCard /> */}
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

function PersonCard({ person }) {
  const { name, position, testimony } = person;

  return (
    <div className={styles.personCard}>
      <div className={styles.review}>
        <h3>
          <ion-icon name="chatbubble-ellipses-outline"></ion-icon> Testimony
        </h3>
        <p>
          {testimony}
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
          pariatur maiores. Voluptate incidunt aut dolorum. */}
        </p>
        <p className={styles.ratings}>⭐⭐⭐⭐⭐</p>
      </div>
      <div className={styles.testifier}>
        <div className={styles.nameInitials}>KE</div>
        <div>
          <h2>{name}</h2>

          <p>
            {/* designation */}
            {position}
          </p>
        </div>
      </div>
    </div>
  );
}

// **************
// Testimonial Form

function Form({ onsubmit }) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [position, setpos] = useState("");
  const [testimony, settestimony] = useState("");

  function handleName(value) {
    setname(value);
    console.log(value);
  }
  function handleEmail(value) {
    setemail(value);
    console.log(value);
  }
  function handlepos(value) {
    setpos(value);
    console.log(value);
  }
  function handletestimony(value) {
    settestimony(value);
    console.log(value);
  }

  function handleSubmision(e) {
    e.preventDefault();
    onsubmit(mytestifier);
    return { ...mytestifier, name, email, position, testimony };
  }

  let mytestifier = {
    name,
    email,
    position,
    testimony,
  };

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
            <input
              type="text"
              value={name}
              onChange={(e) => handleName(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => handleEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Position</label>
            <input
              type="text"
              value={position}
              onChange={(e) => handlepos(e.target.value)}
            />
          </div>
          <div>
            <label>Testimonial</label>
            <input
              type="text"
              value={testimony}
              onChange={(e) => handletestimony(e.target.value)}
            />
          </div>
          <div className={styles.formBtn}>
            <button>Cancel</button>
            <button type="submit" onSubmit={(e) => handleSubmision(e)}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
