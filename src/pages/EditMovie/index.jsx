import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GET } from "../../utils";
import { useNavigate } from "react-router-dom";

import CardItem from "../../components/CardItem";
import CreateCardForm from "../../components/CreateCardForm";
import styles from "./styles.module.scss";

function EditMovie(props) {

  //console.log(props);
  const navigate = useNavigate();

  const location = useLocation();
  const [movieData, setMovieData] = useState({});
  const movieId = location.pathname.split("/").reverse()[0];

  useEffect(() => {
    GET(movieId).then((data) => setMovieData(data));

    // eslint-disable-next-line
  }, []);


  const completeCallback = () => {
    // console.log("ok, modificato");

    props.editSuccess();
  
    navigate("/");
  };



  return (
    <div className={styles.EditMovie}>
      <div className={styles.EditMovie__left}>
        <CardItem cardData={movieData} btnDeleteHidden={true} />
      </div>
      <div className={styles.EditMovie__right}>
        <CreateCardForm completeCallback={completeCallback} text="Edit movie" movieData={movieData} />
      </div>
    </div>
  );
}

export default EditMovie;