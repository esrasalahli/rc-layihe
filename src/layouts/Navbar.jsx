import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.icon} to="/">
        MustSee
      </Link>
    </div>
  );
};
