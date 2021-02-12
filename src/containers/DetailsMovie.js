import getData from '../utils/getData';
import API_KEY from '../apikey';
import '../styles/DetailsMovie.css';

const DetailsMovie = async () => {
  const id = window.location.hash.slice(1).split('/')[2];
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const details = await getData(URL);
  const view = `
        <div class="Details-container">
            <div class="details_image-conatiner">
                <img class="details_image" src="https://www.themoviedb.org/t/p/w220_and_h330_face/${
                  details.backdrop_path
                }" alt="Poster ${details.original_title}">
            </div>
            <div class="details_info-conatiner">
                <h1 class="details_title">${details.original_title}</h1>
                <div class="details_info-votes">
                    <div class="details_info-votes-container">
                        <div class="votes_circle">
                            <p class="details_votes">${details.vote_average}</p>
                        </div>
                    </div>
                    <p class="details_counts">Voters: ${details.vote_count}</p>
                    <p class="details_year">Year: ${details.release_date.slice(
                      0,
                      4
                    )}</p>
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
        </div>
    `;

  return view;
};

export default DetailsMovie;
