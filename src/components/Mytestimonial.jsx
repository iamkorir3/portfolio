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
  {
    name: "Emamnuel ",
    email: "1",
    position: "dev",
    testimony: "great",
    id: 2,
  },
];
const testifieer = {
  name: "Emamnuel ",
  email: "",
  position: "dev",
  testimony: "great",
};
export default function Mytestimonial() {
  const [testifiers, setTestifier] = useState([]);
  const [testif, settestif] = useState({ testifieer });
  console.log(test);

  const [addTestimony, setaddTestimony] = useState(false);

  function handleForm(mytestifier) {
    console.log(mytestifier);
    settestif(mytestifier);
    setTestifier({ ...testifiers, mytestifier });
    console.log(mytestifier[1]);
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
      {testifiers.map((person, index) => (
        <PersonCard person={person} key={index} />
      ))}
      ;
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
  const [myname, setname] = useState("");
  const [myemail, setemail] = useState("");
  const [myposition, setpos] = useState("");
  const [mytestimony, settestimony] = useState("");

  const [mytestifier, setmytestifier] = useState({
    name: "",
    email: "",
    position: "",
    testimony: "",
  });

  function handleName(value) {
    setname(value);
  }
  function handleEmail(value) {
    setemail(value);
  }
  function handlepos(value) {
    setpos(value);
  }
  function handletestimony(value) {
    settestimony(value);
  }

  function handleSubmision(e) {
    e.preventDefault();
    console.log(e);
    setmytestifier({
      ...mytestifier,
      name: myname,
      email: myemail,
      position: myposition,
      testimony: mytestimony,
    });
    onsubmit(mytestifier);
  }

  console.log(mytestifier);

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
              value={myname}
              onChange={(e) => handleName(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={myemail}
              onChange={(e) => handleEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Position</label>
            <input
              type="text"
              value={myposition}
              onChange={(e) => handlepos(e.target.value)}
            />
          </div>
          <div>
            <label>Testimonial</label>
            <input
              type="text"
              value={mytestimony}
              onChange={(e) => handletestimony(e.target.value)}
            />
          </div>
          <div className={styles.formBtn}>
            <button>Cancel</button>
            <button type="submit" onClick={(e) => handleSubmision(e)}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
