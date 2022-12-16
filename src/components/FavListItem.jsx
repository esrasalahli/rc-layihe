import React from "react";
const config = {
  "apiKey": "c7a5c33b",
  "apiUrl": "http://www.omdbapi.com/",
  "listUrl": "https://acb-api.algoritmika.org",
  "moviesUrl": "https://www.imdb.com/title/"
}

const FavListItem = ({ id, poster, title, year }) => {

  return (
    <>
      <a href={config.moviesUrl + id + "/"} target="_blank">
        <img src={poster} alt=""/>
      </a>
      <p>
        {title}
      </p>
      <p>{year}</p>
    </>
  );
};

export default FavListItem;
