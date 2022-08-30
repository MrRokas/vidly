export function filterByGenre(allMovies, selectedGenre) {
  return selectedGenre && selectedGenre._id
    ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
    : allMovies;
}
