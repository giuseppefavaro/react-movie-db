import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import CreateCardForm from "../../components/CreateCardForm";
import Modal from "../../components/Modal"

import styles from "./styles.module.scss";

const AddMovie = (props) => {

    // console.log(props);

    const [isModalVisibile, setModalVisibility] = useState(false);

    const navigate = useNavigate();


    const submitComplete = () => {
        // console.log("ok submit ");

        props.editSuccess({
            visible: true,
            content: "You have added a new movie!",
            color: "alertColorBlue",
        })
        
        navigate("/");
    };


    

    useEffect(() => {
        setTimeout(() => {
            setModalVisibility(false);
        }, 3000);
    }, [isModalVisibile]);
        

    return (
        <div className={styles.AddMovie}>
            <CreateCardForm completeCallback={submitComplete} setModalVisibility={setModalVisibility} callType="POST" text="Add new movie" />

            <Modal text="Added a new movie!" isVisibile={isModalVisibile} />
        </div>
    )
}


export default AddMovie;