import React from "react";
import { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import LikeButton from "./common/like";
class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handelDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  render() {
    return <div className="mt-2">{this.renderMoviesTable()}</div>;
  }

  renderMoviesTable() {
    const { movies } = this.state;
    const moviesNumberInDB = movies.length;

    if (moviesNumberInDB === 0)
      return <p>There are no movies in the database.</p>;

    return (
      <>
        <p>Showing {moviesNumberInDB} movies in the database</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
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
                  <LikeButton
                    liked={movie.liked}
                    onLike={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    onClick={() => this.handelDelete(movie)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
