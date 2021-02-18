import getData from '../utils/getData';
import API_KEY from '../apikey';
const { TMDB } = API_KEY();
const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB}`;
import Logo from '../assets/camera-roll.svg';
import loupe from '../assets/loupe.svg';
import '../styles/Header.css';

const Header = async () => {
  const data = await getData(URL);

  const view = `
      <nav class="Menu_container" id="Menu_container">
        <ul class="Menu_list">
          <li class="Menu_item" id="Login">
            <a href="#/login/" class="Menu_link">Log in</a>
          </li>
          <li class="Menu_item" id="Join">
            <a href="#/join//" class="Menu_link">Join</a>
          </li>
          <li class="Menu_item" id="NameUser">
            <a href="#/" class="Menu_link">NameUser</a>
          </li>
          <li class="Menu_item" id="Logaut">
            <a href="#/" class="Menu_link">Log aut</a>
          </li>
          <div class="Menu_item buton_menu" id="buton_menu">
            <div class="line one"></div>
            <div class="line two"></div>
            <div class="line tree"></div>
          </div>
        </ul>
      </nav>
      <a class="Logo_link" href="#/">
        <div class="container_logo">
          <img class="Logo" src="${Logo}" alt="Movies For All Logo">
          <h1 class="Title">Movies For All</h1>
        </div>
      </a>
      <div class="search_and-genre">
        <div class="search_container" id="search_containe">
          <input class="search" id="search" type="search" placeholder="Search">
          <div class="loupe_container">
            <img class="loupe" src=${loupe} alt="loupe">
          </div>
        </div>
        <nav class="genre_container" id="genre_container">
          ${data.genres
            .map(
              (genre) => `
            <li class="genre_element" data-genre_id="${genre.id}">
            <a href="#/genre/${genre.id}/${genre.name.replace(
                / /g,
                '-'
              )}" class="genre_name">${genre.name}</a>
              </li>
              `
            )
            .join('')}
        </nav>
      </div>
    `;
  return view;
};

export default Header;
