import { useState } from "react";
import CardList from "../../components/CardList";

import "./style.css";

function Home () {

  const [searchValue, setSearchValue] = useState("");


  const changing = (event) => {
    setSearchValue(event.target.value);
  };


  return (
    <div className="Home">
      <label htmlFor="search">Search by title or categories:</label>
      <input  value={searchValue} onChange={changing} type="text" id="search" name="search" />

      <CardList filter={searchValue} />
    </div>
  );
}

export default Home;