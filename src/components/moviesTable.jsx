import React, { Component } from "react";
import LikeButton from "./common/like";
import TableHeader from "./common/tableHeader";

class moviesTable extends Component {
  render() {
    const { movies, onDelete, onLike, sortColumn, onSort } = this.props;

    const columns = [
      {
        path: "title",
        label: "Title",
      },
      {
        path: "genre.name",
        label: "Genre ",
      },
      {
        path: "numberInStock",
        label: "Stock",
      },
      {
        path: "dailyRentalRate",
        label: "Rate",
      },
      { key: "like" },
      { key: "delete" },
    ];

    return (
      <table className="table table-hover">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
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
