import React, { Component } from "react";
import { Link } from "react-router-dom";
import LikeButton from "./common/like";
import Table from "./common/table";

class moviesTable extends Component {
  render() {
    const { movies, sortColumn, onSort } = this.props;

    const columns = [
      {
        path: "title",
        label: "Title",
        content: (movie) => (
          <Link className="link-decoration" to={`/${movie._id}`}>
            {movie.title}
          </Link>
        ),
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
      {
        key: "like",
        content: (movie) => (
          <LikeButton
            liked={movie.liked}
            onLike={() => this.props.onLike(movie)}
          />
        ),
      },
      {
        key: "delete",
        content: (movie) => (
          <button
            type="button"
            className="btn btn-sm btn-danger"
            onClick={() => this.props.onDelete(movie)}
          >
            delete
          </button>
        ),
      },
    ];

    return (
      <Table
        columns={columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default moviesTable;
