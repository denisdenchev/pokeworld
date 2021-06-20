import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <>
    <div className={styles.searchBarWrapper}>
    <input className={styles.searchBar}
      key="random1"
      placeholder="Search For a Pokemon"
      type="search"
      // onChange={(e) => setKeyword(e.target.value)}
    />   
    </div>
     </>
  );
};

export default SearchBar;
