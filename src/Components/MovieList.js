import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, setMovies, search, rate, Edithandler }) => {

  return (
    <div className="movieList">
      {movies
        .filter(
          (item) =>
            item.movieName
              .toLowerCase()
              .includes(search.toLowerCase().trim()) &
            (item.rating >= rate)
        )
        .map((item) => (
          <MovieCard movie={item} Edithandler={Edithandler} />
        ))}
    </div>
  );
};

export default MovieList;
