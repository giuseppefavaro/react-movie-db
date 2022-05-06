import styles from "./styles.module.scss";
import CardList from "../../components/CardList";

import { useState } from "react";


function CategoryMovie() {
  const [category, setCategory] = useState([]);

  const selectedCat = (e) => {
    setCategory([e.target.value]);
    console.log(category);
    
  };

  return (

    <div className={styles.CategoryMovie}>

      <h1>Filter by category</h1>

      <div className={styles.CategoryMovie__list}>
        <button className={styles.CategoryMovie__btn} onClick={selectedCat} value="action">Action</button>
        <button className={styles.CategoryMovie__btn} onClick={selectedCat} value="comedy">Comedy</button>
        <button className={styles.CategoryMovie__btn} onClick={selectedCat} value="cinecomic">Cinecomic</button>
        <button className={styles.CategoryMovie__btn} onClick={selectedCat} value="80s">80s</button>
      </div>

      <CardList filter={category.toString()} />

    </div>

  );
}

export default CategoryMovie