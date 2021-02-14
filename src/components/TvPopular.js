import getData from '../utils/getData';
import API_KEY from '../apikey';
const { TMDB } = API_KEY();
const URL = `https://api.themoviedb.org/3/tv/popular?api_key=${TMDB}`;

const TvPopular = async () => {
  const tvs = await getData(URL);

  const view = `
        <div class="Section_title-container">
            <h2 class="Section_title">Series Populares</h2>
        </div>
        <div class="Section_container-movies">
            ${tvs.results
              .map(
                (tv) => `
                <a href="#/movie/${tv.id}/${tv.original_name.replace(
                  / /g,
                  '-'
                )}" class="item_link-image" data-name="${
                  tv.original_name
                }" data-genreIds="${tv.genre_ids}">
                    <img class="item_image" src="https://www.themoviedb.org/t/p/w220_and_h330_face/${
                      tv.poster_path
                    }" alt=${tv.id}>
                    <p class="item_title">${tv.original_name}</p>
                    <div class="item_vote-container">
                      <p class="item_vote">${tv.vote_average}</p>
                    </div>
                </a>
            `
              )
              .join('')}
        </div>
    `;

  return view;
};

export default TvPopular;
