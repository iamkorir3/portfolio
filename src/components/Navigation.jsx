import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useState } from "react";
export default function Navigation() {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav(nav === true ? false : true);
  }
  return (
    <div className={styles.container}>
      <p style={{ margin: 0 }}>
        <ion-icon name="code-slash"></ion-icon> My Portfolio{" "}
      </p>
      <button onClick={handleNav}>
        {nav ? (
          <ion-icon name="close-outline"></ion-icon>
        ) : (
          <ion-icon name="menu-outline"></ion-icon>
        )}
      </button>
      <ul className={`${styles.navlinks} ${nav ? styles.navActive : ""}`}>
        {/* <p to="">
          <ion-icon name="code-slash"></ion-icon> My Portfolio{" "}
        </p> */}

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
