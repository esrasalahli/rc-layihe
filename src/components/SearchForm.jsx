import React, { useState } from "react";
import styles from "./SearchForm.module.css";

const SearchForm = ({ onSearch }) => {
  const [searchString, setSearchString] = useState("");
  return (
    <form onSubmit={onSearch} className={styles.form}>
      <label htmlFor="s-input" >Filmi başlığına görə axtar:</label>
      <div className="inpBut">
        <input
          id="s-input"
          name="search"
          type="text"
          className={styles.input}
          placeholder="Film daxil et..."
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <button
          type="submit"
          className={styles.button}
          id="button-addon2"
          disabled={!searchString}      >
   Axtar      
  </button>
      </div>
    </form>
  );
};

export default SearchForm;
