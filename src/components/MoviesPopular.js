import getData from '../utils/getData';
import API_KEY from '../apikey';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

const Popular = async () => {
  const movies = await getData(URL);

  const view = `
        <div class="Section_title-container">
            <h2 class="Section_title">Populares</h2>
        </div>
        <div class="Section_container-movies">
            ${movies.results
              .map(
                (movie) => `
                <a href="#/movie/${movie.id}/${movie.title.replace(
                  / /g,
                  '-'
                )}" class="item_link-image">
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

  return view;
};

export default Popular;
