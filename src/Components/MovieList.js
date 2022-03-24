import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, setMovies }) => {
  const list = <MovieCard />;
  return (
    <div className="movieList">
      <MovieCard />{" "}
    </div>
  );
};

export default MovieList;
