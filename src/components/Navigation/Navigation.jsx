import React from "react";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
    <div className={styles.navigation}>
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <h2>
        <Link to="/compare">Compare</Link>
      </h2>
      <h2>
        <Link to="/favourites">Favourites</Link>
      </h2>
    </div>
    </>
  );
};

export default Navigation;
