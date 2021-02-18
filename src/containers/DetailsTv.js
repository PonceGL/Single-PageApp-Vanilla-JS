import getData from '../utils/getData';
import API_KEY from '../apikey';
import mas from '../assets/mas.svg';
import menos from '../assets/menos.svg';
import '../styles/DetailsMovie.css';
const { TMDB } = API_KEY();

const DetailsMovie = async () => {
  const id = window.location.hash.slice(1).split('/')[2];
  const URL = `https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB}`;
  const details = await getData(URL);
  const view = `
        <div class="Details-container">
            <div class="details_image-conatiner">
                <img class="details_image" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${
                  details.poster_path
                }" alt="Poster ${details.original_name}">
            </div>
            <div class="details_info-conatiner">
                <h1 class="details_title">${details.original_name}</h1>
                <div class="details_info-votes">
                    <div class="details_info-votes-container">
                        <div class="votes_circle">
                            <p class="details_votes">${details.vote_average}</p>
                        </div>
                    </div>
                    <p class="details_counts">Voters: ${details.vote_count}</p>
                    <p class="details_year">Year: ${details.first_air_date.slice(
                      0,
                      4
                    )}</p>
                    <p class="details_LastEpisode">Episodes: ${
                      details.number_of_episodes
                    }</p>
                    <p class="details_seasons">Seasons: ${
                      details.seasons.length
                    }</p>
                </div>
                <div>
                    ${details.genres
                      .map(
                        (genre) => `<p class="details_genre">${genre.name}</p>`
                      )
                      .join('')}
                </div>
                <div class="details_description">
                    <p>
                        ${details.overview}
                    </p>
                </div>
                <div class="production_container">
                ${details.production_companies
                  .map(
                    (companie) =>
                      `<p class="production_name">${companie.name}</p>`
                  )
                  .join('')}
                </div>
            </div>
            <img src="${mas}" class="mas" id="mas" alt="mas">
            <img src="${menos}" class="menos" id="menos" alt="menos">
        </div>
    `;

  return view;
};

export default DetailsMovie;
