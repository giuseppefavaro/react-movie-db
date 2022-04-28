import { useState, useEffect } from "react";

import CreateCardForm from "../../components/CreateCardForm";
import Modal from "../../components/Modal"

import styles from "./styles.module.scss";

const AddMovie = () => {

    const [isModalVisibile, setModalVisibility] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setModalVisibility(false);
        }, 3000);
    }, [isModalVisibile]);
        

    return (
        <div className={styles.AddMovie}>
            <h1>Add new movie</h1>

            <CreateCardForm setModalVisibility={setModalVisibility} />

            <Modal text="Hai aggiunto un nuovo film!" isVisibile={isModalVisibile} />
        </div>
    )
}


export default AddMovie;