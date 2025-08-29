import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
export default function Navigation() {
  return (
    <div className={styles.container}>
      <ul className={styles.navlinks}>
        <p to="">
          <ion-icon name="code-slash"></ion-icon> My Portfolio{" "}
        </p>

        <li>
          <NavLink to="/">
            <ion-icon name="home"></ion-icon> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <ion-icon name="information-circle"></ion-icon> About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Projects">
            <ion-icon name="code-slash"></ion-icon> Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/Skills">
            <ion-icon name="mail"></ion-icon> Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/testimonials">
            <ion-icon name="stats-chart"></ion-icon> Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <ion-icon name="mail"></ion-icon> Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
