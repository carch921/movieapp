import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, setMovies, search, rate }) => {
  return (
    <div className="movieList">
      {movies
        .filter(
          (movie) =>
            movie.movieName
              .toLowerCase()
              .includes(search.toLowerCase().trim()) &
            (movie.rating >= rate)
        )
        .map((movie) => (
          <MovieCard movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;
