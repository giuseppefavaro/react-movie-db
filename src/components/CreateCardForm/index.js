import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { POST, PUT } from "../../utils"
import styles from "./styles.module.scss"



const CreateCardForm = ({setModalVisibility, callType, completeCallback, text, movieData}) => {


    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [poster, setPoster] = useState("");
    const [genres, setGenres] = useState("");
    const [description, setDescription] = useState("");

    
    useEffect(() => {
      if (movieData) {
        setTitle(movieData.title);
        setYear(movieData.year);
        setPoster(movieData.poster);
        setGenres(movieData.genres);
        setDescription(movieData.description);
      }
    }, [movieData]);
    

    const genresInArr = (genres) => {
      // from edit page
      if (Array.isArray(genres)) {
          return genres;
      } else { 
        return genres.split(",");
       }
    }
    

    const location = useLocation();
    const movieId = location.pathname.split("/").reverse()[0];



    const addMovie = async (e) => {
        e.preventDefault();

        if (callType === "POST") {
          await POST({
            title,
            year,
            poster,
            genres: genresInArr(genres),
            description,
          });
          
          setModalVisibility(true);

          completeCallback();


        } else {
          
         await PUT(movieId, {
            title,
            year,
            poster,
            genres: genresInArr(genres),
            description,
          });

          completeCallback();
  
        }

    }



      
    return (
        
        <main className={styles.CreateCardForm}>

        <h1>{text}</h1>
    
          <form onSubmit={addMovie} className={styles.CreateCardForm__form}>

            <div className={styles.CreateCardForm__form__input}>
              <label htmlFor="title">Title:</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="title" name="title" required />
            </div>
            <div className={styles.CreateCardForm__form__input}>
              <label htmlFor="year">Year:</label>
              <input value={year} onChange={(e) => setYear(e.target.value)} type="text" id="year" name="year" required />
            </div>
            <div className={styles.CreateCardForm__form__input}>
              <label htmlFor="poster">Poster:</label>
              <input value={poster} onChange={(e) => setPoster(e.target.value)} type="text" id="poster" name="poster" required />
            </div>
            <div className={styles.CreateCardForm__form__input}>
              <label htmlFor="genres">Genres:</label>
              <input value={genres} onChange={(e) => setGenres(e.target.value)} type="text" id="genres" name="genres" required />
            </div>
            <div className={styles.CreateCardForm__form__textarea}>
              <label htmlFor="description">Description:</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" name="description" required></textarea>
            </div>
            <div className={styles.CreateCardForm__form__btn}>
              <input type="submit" value={text} />
            </div>

          </form>
            {/* <button onClick={() => console.log(title, year, poster, genres, description )}>Test</button> */}
            
        </main>
      );
}

export default CreateCardForm;