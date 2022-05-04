import { useState } from "react";
import CardList from "../../components/CardList";

import styles from "./styles.module.scss"
import Search from "../../components/Search";

function Home () {

  const [searchValue, setSearchValue] = useState("");


  const changing = (event) => {
    setSearchValue(event.target.value);
  };


  return (
    <main className={styles.Home}>
      <Search changing={changing} searchValue={searchValue} />

      <CardList filter={searchValue} />
    </main>
  );
}

export default Home;