import React from "react";
import LikeButton from "./common/like";

const moviesTable = (props) => {
  const { movies, onDelete, onLike, onSort } = props;
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th onClick={() => onSort("title")} scope="col">
            Title
          </th>
          <th onClick={() => onSort("genre.name")} scope="col">
            Genre
          </th>
          <th onClick={() => onSort("numberInStock")} scope="col">
            Stock
          </th>
          <th onClick={() => onSort("dailyRentalRate")} scope="col">
            Rate
          </th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <LikeButton liked={movie.liked} onLike={() => onLike(movie)} />
            </td>
            <td>
              <button
                type="button"
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(movie)}
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default moviesTable;
