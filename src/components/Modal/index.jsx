import styles from "./styles.module.scss";




const Modal = ({text, isVisibile}) => {



    return (
        <>

        { isVisibile && (<div className={styles.Modal}>
        <div className={styles.Modal__wrapper}>
        <p className={styles.Modal__text}>{text}</p>
        </div>
        </div>) }

        </>
    )
}

export default Modal;