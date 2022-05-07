import { useState } from "react";
import CardList from "../../components/CardList";

import styles from "./styles.module.scss"
import Search from "../../components/Search";

function Home ({idCardInApp}) {

  const [searchValue, setSearchValue] = useState("");


  const changing = (event) => {
    setSearchValue(event.target.value);
  };


  const idCardInHome = (id) => {
    // console.log("Id in Home", idCard);
    idCardInApp(id);
  } 


  return (
    <main className={styles.Home}>
      <Search changing={changing} searchValue={searchValue} />

      <CardList idCardInHome={idCardInHome} filter={searchValue} />
    </main>
  );
}

export default Home;