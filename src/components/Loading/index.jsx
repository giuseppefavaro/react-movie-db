import styles from "./styles.module.scss";

const Loading = () => {
    return (
        <div className={styles.Loading}>
            <div className={styles.Loading__circle}></div>
        </div>
    )
}

export default Loading;