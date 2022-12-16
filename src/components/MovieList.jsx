import React from "react";
import { useSelector } from "react-redux";
import { selectID } from "../feautures/saveToggle";
import MovieListItem from "./MovieListItem";

const MovieList = ({ movies }) => {
  const disable = useSelector(selectID);

  return (
    <>
      {movies?.length
        ? movies.map((m) => (
          <MovieListItem movie={m} key={m.imdbID} disable={!!disable} />
        ))
        : <p style={{ fontSize: 18, color: 'white', textAlign: 'left', marginTop: 10 }}>Film adı daxil edilməyib</p>}
    </>
  );
};

export default MovieList;
