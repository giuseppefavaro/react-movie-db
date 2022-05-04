import { useState, useEffect } from "react";
import CardItem from "../CardItem";

import {GET} from "../../utils";

import styles from "./styles.module.scss"



// GET().then((resultData) => console.log(resultData) );


const CardList = ({filter}) => {

    const [moviesData, setMoviesData] = useState([]);
    const [moviesDataFiltered, setMoviesDataFiltered] = useState([]);


    useEffect(() => {

         GET().then( (resultData) => {
            setMoviesData(resultData);
            setMoviesDataFiltered(resultData);
         } ) 

    } , []);

   

    useEffect(() => {
        const filtered = moviesDataFiltered.filter((movie) => {

            return ( movie.title.toLowerCase().includes(filter.toLowerCase()) ) || ( movie.genres.toString().toLowerCase().includes(filter.toLowerCase()) )
        
        })
        
        setMoviesData(filtered);

    // eslint-disable-next-line
    }, [filter]);




    // console.log(moviesDataFiltered);

    // console.log(moviesData);

    
    return (
        <div className={styles.CardList}>
            
            {  moviesData &&
                        
                moviesData.map((movie) => (
                <div className={styles.CardWrapper}>
                    <CardItem btnDeleteVisibility={true} cardData={movie} key={movie.id} />
                </div> 

            )) }
                 
        </div>

    )
}

export default CardList;