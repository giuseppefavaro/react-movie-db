import { useState } from "react";

import { useLocation } from "react-router-dom";

import { POST, PUT } from "../../utils"

import styles from "./styles.module.scss"

const CreateCardForm = ({setModalVisibility, callType}) => {


    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [poster, setPoster] = useState("");
    const [genres, setGenres] = useState("");
    const [description, setDescription] = useState("");

    const genresInArr = (genres) => genres.split(",");


    const location = useLocation();
    const movieId = location.pathname.split("/").reverse()[0];



    const addMovie = (e) => {
        e.preventDefault();

        if (callType === "POST") {
          POST({
            title,
            year,
            poster,
            genres: genresInArr(genres),
            description,
          });
          
          setModalVisibility(true);
        } else {
          
          PUT(movieId, {
            title,
            year,
            poster,
            genres: genresInArr(genres),
            description,
          });
          
        }

    }



      
    return (
        
        <div className={styles.CreateCardForm}>

          <h2>Add new movie</h2>
    
          <form onSubmit={addMovie} className={styles.CreateCardForm__form}>

            <label htmlFor="title">Title:</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="title" name="title" required />

            <label htmlFor="year">Year:</label>
            <input value={year} onChange={(e) => setYear(e.target.value)} type="text" id="year" name="year" required />

            <label htmlFor="poster">Poster:</label>
            <input value={poster} onChange={(e) => setPoster(e.target.value)} type="text" id="poster" name="poster" required />

            <label htmlFor="genres">Genres:</label>
            <input value={genres} onChange={(e) => setGenres(e.target.value)} type="text" id="genres" name="genres" required />

            <label htmlFor="description">Description:</label>
            <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" id="description" name="description" required />
    
            <input type="submit" value="Add movie" />
          </form>
            {/* <button onClick={() => console.log(title, year, poster, genres, description )}>Test</button> */}
        </div>
      );
}

export default CreateCardForm;