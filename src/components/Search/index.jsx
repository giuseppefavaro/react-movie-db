import styles from "./styles.module.scss";

const Search = ({searchValue, changing}) => {
    return (
        <div className={styles.Search}>
            <label htmlFor="search">Search by title or categories:</label>
            <input value={searchValue} onChange={changing} type="text" id="search" name="search" placeholder="Search movie" />
        </div>
    )
}

export default Search;