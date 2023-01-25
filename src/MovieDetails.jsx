import React from "react";

const MovieDetails = ({ movie }) => {
  return (
    <div className="">
      <img src={movie.Poster} />
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieDetails;
