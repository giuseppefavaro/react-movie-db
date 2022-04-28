import { useState } from "react";

import { POST } from "../../utils"

import "./style.css";

const CreateCardForm = ({setModalVisibility}) => {


    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [poster, setPoster] = useState("");
    const [genres, setGenres] = useState("");
    const [description, setDescription] = useState("");

    const genresInArr = (genres) => genres.split(",");





    const addMovie = (e) => {
        e.preventDefault();

        POST({
            title,
            year,
            poster,
            genres: genresInArr(genres),
            description,
          });

          setModalVisibility(true);
    }



      
    return (
        
        <div className="CreateCardForm">


        

          <h2>Add new movie</h2>
    
          <form onSubmit={addMovie} className="CreateCardForm__form">

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