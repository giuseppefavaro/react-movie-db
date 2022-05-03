import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GET } from "../../utils";
import { useNavigate } from "react-router-dom";

import CardItem from "../../components/CardItem";
import CreateCardForm from "../../components/CreateCardForm";
import styles from "./styles.module.scss";

function EditMovie(props) {

  //console.log(editCallback);
  const navigate = useNavigate();

  const location = useLocation();
  const [movieData, setMovieData] = useState({});
  const movieId = location.pathname.split("/").reverse()[0];

  useEffect(() => {
    GET(movieId).then((data) => setMovieData(data));
  }, []);


  const submitComplete = () => {
    console.log("ok modificato ");

    props.editSuccess({
      visible: true,
      content: "You have successfully edited the movie",
      color: "green",
    })
  
    navigate("/");
};



  return (
    <div className={styles.EditMovie}>
      <div className={styles.EditMovie__left}>
        <CardItem cardData={movieData} />
      </div>
      <div className={styles.EditMovie__right}>
        <h1>Edit movie</h1>
        <CreateCardForm completeCallback={submitComplete} setModalVisibility={false} callType="PUT" />
      </div>
    </div>
  );
}

export default EditMovie;