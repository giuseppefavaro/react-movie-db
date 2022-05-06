
import { Link } from "react-router-dom";
import { DELETE } from "../../utils";

import styles from "./styles.module.scss";


const CardItem = ({ cardData, btnDeleteVisibility  }) => {


    const onCardDelete = () => {
        DELETE(cardData.id).then( (data) => window.location.reload("/"));
    }

    return (
        <div className={styles.CardWrapper}>
            <article className={styles.CardItem}>
                <img className={styles.CardItem__poster} src={cardData.poster} alt={cardData.title} />
                <Link to={`/edit-movie/${cardData.id}`}>
                    <h2 className={styles.CardItem__title}>{cardData.title}</h2>
                </Link>
                <p className={styles.CardItem__year}>{cardData.year}</p>
                <p className={styles.CardItem__description}>{cardData.description}</p>
                <div className={styles.CardItem__genre}>
                    <ul>
                        { Array.isArray(cardData.genres) &&
                        cardData.genres.map((genre, index) => (
                        <li key={index}>{genre}</li>
                        ))}
                    </ul>

                    { btnDeleteVisibility && <button onClick={onCardDelete} className={styles.CardItem__btn}></button>}
                </div>
            </article>
         </div> 
      );
}

export default CardItem;