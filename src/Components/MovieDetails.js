import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const params = useParams();
  const movie = movies.find((el) => el.id == params.movieId);
  return (
    <div className="MovieDetail">
      <h1>{movie.name} </h1>
      <ReactPlayer url={movie.trailer} />
      <h2>Synopsis</h2>
      <h4>{movie.Description}</h4>
    </div>
  );
};

export default MovieDetail;
