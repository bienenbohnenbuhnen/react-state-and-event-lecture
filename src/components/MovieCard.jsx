import React from "react";

function MovieCard(props) {
  const { movie, clickToDelete } = props;

  return (
    <div className="MovieCard">
      <h3>{props.movie.title}</h3>
      <p>Director: {props.movie.director}</p>
      <p>Rating: {props.movie.IMDBRating}</p>
      {movie.hasOscars ? (
        <p>Got the Oscar Award!</p>
      ) : (
        <p>Great movie but no Oscars!</p>
      )}
      <button onClick={() => clickToDelete(movie._id)} className="btn-delete">
        Delete
      </button>{" "}
    </div>
  );
}

export default MovieCard;
