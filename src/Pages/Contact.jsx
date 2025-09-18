import Navigation from "../components/Navigation";
import ContactMe from "../components/ContactMe";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <ContactMe />
      {/* <p>
        <head>hello</head>
      </p> */}
      <Navigation />
    </div>
  );
}
