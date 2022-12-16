import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../../feautures/favListSlice";
import { addFavID } from "../../feautures/apiSlice";
import { addFavListName } from "../../feautures/listNameSlice";
import api from "../../api";
import { Link } from "react-router-dom";
import { setDisable } from "../../feautures/saveToggle";
import styles from "./index.module.css";

function Favorites() {
  const favs = useSelector((state) => state.favs);
  const dispatch = useDispatch();

  const apiID = useSelector((state) => state);

  const [listName, setListName] = useState("Example List");
  const handleSave = async (e) => {
    await api
      .save({
        title: listName,
        movies: favs,
      })
      .then((d) => {
        dispatch(addFavID(d.id));
        dispatch(addFavListName(listName));
        dispatch(setDisable());
        console.log(apiID.api);
      });
  };


  return (
    <>
      <div>
        <input
          placeholder="Yeni siyahı adı: "
          className={styles.favListName}
          defaultValue="Nümunə"
          onChange={(e) => setListName(e.target.value)}
          disabled={apiID.api}
        />
        <div className={styles.favList}>
          {favs.map((f) => (
            <div key={f.id} className={styles.favListItem}>
              <span>
                {f.title} {f.year}
              </span>
              <button
                type="button"
                className={styles.delBtn}
                onClick={() => {
                  dispatch(removeMovie({ id: f.id }));
                }}
              >
                X
              </button>
            </div>
          ))}
        </div>
        {apiID.api ? (
          <Link to={`/favorite/${apiID.api}`} className={styles.link }>
         Listə get
          </Link>
        ) : (
          <button onClick={handleSave} className={styles.btnSave}>
            Listi yadda saxla
          </button>
        )}
      </div>
    </>
  );
}

export default Favorites;
