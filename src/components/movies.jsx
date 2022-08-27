import React from "react";
import { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import LikeButton from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";
import ListGroup from "./common/listGroup";
import { moviesByGenre } from "./utils/moviesByGenre";
class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
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

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSelect = (genre) => {
    console.log(genre);
    this.setState({ selectedGenre: genre });
  };

  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      genres,
      selectedGenre,
    } = this.state;

    const selectedMovies = moviesByGenre(allMovies, selectedGenre);

    const movies = paginate(selectedMovies, currentPage, pageSize);

    if (selectedMovies === 0)
      return <p>There are no movies in the database.</p>;

    return (
      <>
        <div className="row">
          <div className="col-auto">
            <ListGroup
              onReturnAll={this.handleSelect}
              listItems={genres}
              onSelect={this.handleSelect}
              selectedItem={selectedGenre}
            />
          </div>
          <div className="col">
            <p>Showing {selectedMovies.length} movies in the database</p>
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
            <Pagination
              itemsCount={allMovies.length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
              onNext={this.handlePageChange}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
