import getData from '../utils/getData';
import API_KEY from '../apikey';
const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

const TrendingWeek = async () => {
  const movies = await getData(URL);

  const view = `
        <div class="Section_title-container">
            <h2 class="Section_title">Tendencia de la Semana</h2>
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
                </a>
            `
              )
              .join('')}
        </div>
    `;
  return view;
};

export default TrendingWeek;
