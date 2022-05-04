import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.Header}>
        
            <div className={styles.Header__logo}>
                <Link to="/"><img src={process.env.PUBLIC_URL + '/moviedb-logo.png'} width="137" height="32" alt="moviedb" /></Link>
            </div>

            <nav className={styles.Header__menu}>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/add-movie">Add movie</Link>
                    </li>
                </ul>
            </nav>

      </header>  
    )
}

export default Header;