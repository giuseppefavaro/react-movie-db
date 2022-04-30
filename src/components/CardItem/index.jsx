
import { Link } from "react-router-dom";
import { DELETE } from "../../utils";

import styles from "./styles.module.scss";


const CardItem = ({ cardData  }) => {


    const onCardDelete = () => {
        DELETE(cardData.id).then( (data) => window.location.reload("/"));
    }

    return (
        <div className={styles.CardItem}>
            <Link to={`/edit-movie/${cardData.id}`}>
                <h2>{cardData.title}</h2>
            </Link>

            <button onClick={onCardDelete} className={styles.CardItem__btn}>X</button>

            <p>{cardData.year}</p>
            <img src={cardData.poster} alt={cardData.title} />
            <p>{cardData.description}</p>
            <div className={styles.genre}>
                <ul>
                    { Array.isArray(cardData.genres) &&
                    cardData.genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                    ))}
                </ul>
            </div>
      </div>
      );
}

export default CardItem;