import "./style.css";

const CardItem = ({ cardListItems }) => {
    return (
        <div className="CardItem">
          <a href="a">
            <h2>Titolo</h2>
          </a>
          <p>2006</p>
          <img src="a" alt="prova" />
          <p></p>
          <div className="genre">
            <ul>
                <li>Primo elemento</li>
                <li>Primo elemento</li>
                <li>Primo elemento</li>
            </ul>
          </div>
        </div>
      );
}

export default CardItem;