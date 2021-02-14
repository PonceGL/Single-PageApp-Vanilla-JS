import getData from '../utils/getData';
import API_KEY from '../apikey';
const { TMDB } = API_KEY();
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB}`;

const Genre = async () => {
  const data = await getData(URL);
  const allMovies = data.results;
  const genero = window.location.hash.slice(1).split('/')[3].replace(/-/g, ' ');
  const id = window.location.hash.slice(1).split('/')[2];
  const filmsOfTheGenre = allMovies.map((singleMovie) =>
    singleMovie.genre_ids.filter((ids) => ids == id)
  );
  const filterMovies = [];
  for (let i = 0; i < allMovies.length; i++) {
    if (filmsOfTheGenre[i] == id) {
      filterMovies.push(allMovies[i]);
    }
  }

  if (filterMovies.length === 0) {
    return `
    <div class="Section_title-container">
      <h2 class="Section_title">Upss! There is nothing in this genre, at the moment....</h2>
    </div>`;
  } else {
    return `
          <div class="Section_title-container">
            <h2 class="Section_title">${genero}</h2>
          </div>
          <div class="Section_container-movies">
              ${filterMovies
                .map(
                  (movie) => `
                  <a href="#/movie/${movie.id}/${movie.title.replace(
                    / /g,
                    '-'
                  )}" class="item_link-image" data-name="${
                    movie.title
                  }" data-genreIds="${movie.genre_ids}">
                      <img class="item_image" src="https://www.themoviedb.org/t/p/w220_and_h330_face/${
                        movie.poster_path
                      }" alt=${movie.id}>
                      <p class="item_title">${movie.title}</p>
                      <div class="item_vote-container">
                        <p class="item_vote">${movie.vote_average}</p>
                      </div>
                  </a>
              `
                )
                .join('')}
          </div>
      `;
  }
};

export default Genre;
