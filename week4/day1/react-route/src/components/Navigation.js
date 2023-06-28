import React from "react";
import styles from "styles/Navigation.module.css";
// import styles from "../styles/Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
