import { useState, useEffect } from "react";
import CardItem from "../CardItem";

import "./style.css";


import {getData} from "../../utils";



// getData().then((resultData) => console.log(resultData) );


const CardList = () => {

    const [moviesData, setMoviesData] = useState([]);


    useEffect(() => {

         // getData().then((resultData) => setMoviesData(resultData) ) 

         getData().then( (resultData) => setMoviesData(resultData) ) 

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