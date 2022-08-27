export function moviesByGenre(movies, genre = null) {
  if (genre === null) {
    return movies;
  }
  return movies.filter((movie) => movie.genre.name === genre);
}
