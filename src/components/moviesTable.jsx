import React, { Component } from "react";
import LikeButton from "./common/like";

class moviesTable extends Component {
  render() {
    const { movies, onDelete, onLike } = this.props;

    const raiseSort = (path) => {
      const sortColumn = { ...this.props.sortColumn };
      if (sortColumn.path === path) {
        sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
      } else {
        sortColumn.path = path;
        sortColumn.order = "asc";
      }
      this.props.onSort(sortColumn);
    };

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th onClick={() => raiseSort("title")} scope="col">
              Title
            </th>
            <th onClick={() => raiseSort("genre.name")} scope="col">
              Genre
            </th>
            <th onClick={() => raiseSort("numberInStock")} scope="col">
              Stock
            </th>
            <th onClick={() => raiseSort("dailyRentalRate")} scope="col">
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
  }
}

export default moviesTable;
