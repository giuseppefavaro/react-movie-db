import { useState, useEffect } from "react";
import CardItem from "../CardItem";

import {GET} from "../../utils";

import styles from "./styles.module.scss"



// GET().then((resultData) => console.log(resultData) );


const CardList = ({filter, idCardInHome}) => {

    const idCardInCardList = (id) => {
       //  console.log("Id in CardList", idCard);
        idCardInHome(id);
    }


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

                    <div className={styles.CardWrapper} key={movie.id}>
                        <CardItem idCardInCardList={idCardInCardList} btnDeleteVisibility={true} cardData={movie} />
                    </div>

            )) }
                 
        </div>

    )
}

export default CardList;