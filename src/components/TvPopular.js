import getData from '../utils/getData';
import API_KEY from '../apikey';
const URL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;

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
                <a href="/${tv.name.replace(
                  / /g,
                  '-'
                )}" class="item_link-image">
                    <img class="item_image" src="https://www.themoviedb.org/t/p/w220_and_h330_face/${
                      tv.poster_path
                    }" alt=${tv.id}>
                    <p class="item_title">${tv.name}</p>
                </a>
            `
              )
              .join('')}
        </div>
    `;

  return view;
};

export default TvPopular;
