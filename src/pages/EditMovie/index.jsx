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
  }, [movieId]);


  const submitComplete = () => {
    // console.log("ok modificato ");

    props.editSuccess({
      visible: true,
      content: "You have successfully edited the movie",
      color: "alertColorGreen",
    })
  
    navigate("/");
};



  return (
    <div className={styles.EditMovie}>
      <div className={styles.EditMovie__left}>
        <CardItem cardData={movieData} btnDeleteVisibility={false} />
      </div>
      <div className={styles.EditMovie__right}>
        <CreateCardForm completeCallback={submitComplete} btnDeleteVisibility={false} text="Edit movie" />
      </div>
    </div>
  );
}

export default EditMovie;