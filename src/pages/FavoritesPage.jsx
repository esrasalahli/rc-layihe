import React from "react";
import { useSelector } from "react-redux";
import FavListItem from "../components/FavListItem";
import { selectFavs } from "../feautures/favListSlice";
import { selectFavName } from "../feautures/listNameSlice";
import "./FavoritesPage.css";

const FavoritesPage = () => {
  const favs = useSelector(selectFavs);

  const listName = useSelector(selectFavName);

  return (
    <div className="favContainer">
      <h3>Your List is {listName}</h3>
      <div className="favContainerMap">
        {favs.map((m) => (
          <li key={m.id} className="splide__slide">
            <FavListItem
              id={m.id}
              title={m.title}
              year={m.year}
              poster={m.poster}
            />
          </li>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;