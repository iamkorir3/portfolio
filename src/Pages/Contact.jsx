            import Navigation from "../components/Navigation";
            import ContactMe from "../components/ContactMe";
            import styles from "./Contact.module.css";

            export default function Contact() {
              return (
                <div className={styles.container}>
                  <Navigation />
                  <CallConat />
                </div>
              );
            }

            function CallConat() {
              return <ContactMe />;
            }
