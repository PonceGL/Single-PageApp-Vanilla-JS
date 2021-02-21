import firebaseApp from '../utils/firebaseApp';
import getData from '../utils/getData';
import API_KEY from '../apikey';
import menos from '../assets/menos.svg';
import '../styles/User.css';
const { firebase } = firebaseApp();
const { TMDB } = API_KEY();

const User = async () => {
  const user = await firebase.auth().currentUser;
  let moviesList;
  let tvShowsList;

  firebase
    .firestore()
    .collection('users')
    .get()
    .then((snapshot) => {
      const filter = snapshot.docs.filter((doc) => doc.id === user.uid);
      moviesList = filter[0].data().watchlist.movies;
      tvShowsList = filter[0].data().watchlist.tvShows;
    })
    .then(() => {
      const containerMovies = document.getElementById(
        'watch-list_container_movies'
      );
      moviesList.map(async (movieItem) => {
        const URL_MOVIE = `https://api.themoviedb.org/3/movie/${movieItem}?api_key=${TMDB}`;
        const details = await getData(URL_MOVIE);
        containerMovies.innerHTML += `
          <div class="watch-list_item">
            <img class="watch-list_item_image" src="https://www.themoviedb.org/t/p/w220_and_h330_face/${
              details.poster_path
            }" alt="Poster de la pelicula ${details.original_title}" />
            <p class="watch-list_item_title"><a class="watch-list_item_link" href="#/movie/${
              details.id
            }/${details.title.replace(/ /g, '-')}">${
          details.original_title
        }</a></p>
            <img src="${menos}" class="menosWatchList" id="menosWatchList" alt="menos" />
          </div>
        `;
      });
    })
    .then(() => {
      const containerTvshows = document.getElementById(
        'watch-list_container_tvshows'
      );
      tvShowsList.map(async (movieItem) => {
        const URL_TV = `https://api.themoviedb.org/3/tv/${movieItem}?api_key=${TMDB}`;
        const details = await getData(URL_TV);
        containerTvshows.innerHTML += `
          <div class="watch-list_item">
            <img class="watch-list_item_image" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${
              details.poster_path
            }" alt="Poster de la pelicula ${details.original_title}" />
            <p class="watch-list_item_title"><a class="watch-list_item_link" href="#/tvshow/${
              details.id
            }/${details.original_name.replace(/ /g, '-')}">${
          details.original_name
        }</a></p>
            <img src="${menos}" class="menosWatchList" id="menosWatchList" alt="menos" />
          </div>
        `;
      });
    })
    .catch((error) => {
      const watchList = document.getElementById('watch-list_title');
      const watchSections = document.getElementById(
        'watch-list_container_sections'
      );
      watchList.innerText = 'An error has occurred, please click on the logo';
      watchSections.innerHTML = '';
      console.log('Error getting document:', error);
      console.clear();
    });

  const view = `
    <section class="watch-list_section">
      <div class="watch-list_conatiner_title">
        <h2 class="watch-list_title" id="watch-list_title">Watch List</h2>
      </div>
      <div class="watch-list_container_sections" id="watch-list_container_sections">
        <div class="watch-list_sections">
          <h3 class="watch-list_sections_titles">Movies</h3>
          <div class="watch-list_items_container" id="watch-list_container_movies"></div>
        </div>
        <div class="watch-list_sections">
          <h3 class="watch-list_sections_titles">Tv Shows</h3>
          <div class="watch-list_items_container" id="watch-list_container_tvshows"></div>
        </div>
      </div>
    </section>
  `;

  return view;
};

export default User;
