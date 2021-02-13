import getData from '../utils/getData';
import API_KEY from '../apikey';
const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
import Logo from '../assets/camera-roll.svg';
import loupe from '../assets/loupe.svg';
import '../styles/Header.css';

const Header = async () => {
  const data = await getData(URL);
  const view = `
      <div class="container_logo">
        <a class"Logo_link" href="#/">
          <img class="Logo" src="${Logo}" alt="Movies For All Logo">
          <h1 class="Title">Movies For All</h1>
        </a>
      </div>
      <div class="search_and-genre">
        <div class="search_container">
          <input class="search" type="search" placeholder="Busqueda">
          <div class="loupe_container">
            <img class="loupe" src=${loupe} alt="loupe">
          </div>
        </div>
        <nav class="genre_container">
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

{
  /* <nav class="genre_container">
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
</nav> */
}
