export function transformData(movieData, genreData) {
  const transformedMovies = movieData.map(movie => {
    const genreIds = movie.genre_ids;
    const genres = genreIds.map(
      id => genreData.find(genre => genre.id === id).name
    );

    return {
      release_date: movie.release_date,
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path,
      genreFirst: genres[0],
      genreSecond: genres[1],
    };
  });

  return transformedMovies;
}
