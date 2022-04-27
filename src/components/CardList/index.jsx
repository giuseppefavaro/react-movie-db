import { useState, useEffect } from "react";
import CardItem from "../CardItem";

import "./style.css";


import {GET} from "../../utils";



// GET().then((resultData) => console.log(resultData) );


const CardList = () => {

    const [moviesData, setMoviesData] = useState([]);


    useEffect(() => {

         // GET().then((resultData) => setMoviesData(resultData) ) 

         GET().then( (resultData) => setMoviesData(resultData) ) 

        } , []);




    // console.log(moviesData);

    
    return (
        <div className="CardList">

            <h1>Lista dei film</h1>

            <div className="CardList__wrapper">
                {   moviesData &&

                    moviesData.map((movie) => (

                    <CardItem cardData={movie} key={movie.id} />

                )) }
            </div>

        </div>

    )
}

export default CardList;