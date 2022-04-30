import { useState } from "react";
import CardList from "../../components/CardList";

import styles from "./styles.module.scss"

function Home () {

  const [searchValue, setSearchValue] = useState("");


  const changing = (event) => {
    setSearchValue(event.target.value);
  };


  return (
    <div className={styles.Home}>
      <div className={styles.Home__search}>
        <label htmlFor="search">Search by title or categories:</label>
        <input value={searchValue} onChange={changing} type="text" id="search" name="search" placeholder="Cerca il film per titolo o categoria" />
      </div>

      <CardList filter={searchValue} />
    </div>
  );
}

export default Home;