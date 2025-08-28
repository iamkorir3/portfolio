import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
export default function Navigation() {
  return (
    <div className={styles.container}>
      <ul className={styles.navlinks}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/Projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/Skills">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/testimonials">Testimonials</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
