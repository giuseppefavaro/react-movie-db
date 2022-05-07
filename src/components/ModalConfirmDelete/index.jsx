import styles from "./styles.module.scss";
import { DELETE } from "../../utils";


const ModalConfirmDelete = ({idCard, showModalDelete, closeModalConfirmDelete}) => {

  const deleteCard = (idCard) => {
    DELETE(idCard).then(() => window.location.reload(false));
  };


    return (
        showModalDelete &&
        <div className={styles.ModalConfirmDelete}>
          <div className={styles.ModalConfirmDelete__wrapper}>
            <div className={styles.ModalConfirmDelete__content}>
              <p>Are you sure you want to delete this movie?</p>
              <button className={styles.ModalConfirmDelete__btnRed} onClick={() => deleteCard(idCard)}>Confirm delete</button>
              <button onClick={() => closeModalConfirmDelete()}>Close</button>
            </div>
          </div>
        </div>
    )
}

export default ModalConfirmDelete;