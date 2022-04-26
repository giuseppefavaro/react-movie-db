import "./style.css";

const CardItem = ({ cardData  }) => {
    return (
        <div className="CardItem">
            <a href="a">
            <h2>{cardData.title}</h2>
            </a>
            <p>{cardData.year}</p>
            <img src={cardData.poster} alt={cardData.title} />
            <p>{cardData.description}</p>
            <div className="genre">
                <ul>
                    {cardData.genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                    ))}
                </ul>
            </div>
      </div>
      );
}

export default CardItem;