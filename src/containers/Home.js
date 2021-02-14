import MoviesPopular from '../components/MoviesPopular';
import MoviesTrendingWeek from '../components/MoviesTrendingWeek';
import TvPopular from '../components/TvPopular';
import '../styles/Section.css';

const Home = async () => {
  const inputSearch = document.getElementById('search');
  inputSearch.addEventListener('keyup', (e) => {
    const movies = document.querySelectorAll('.item_link-image');
    const search = e.target.value.toLowerCase();
    const titles = document.querySelectorAll('.Section_title-container');
    movies.forEach((movie) => {
      if (!movie.attributes[2].value.toLocaleLowerCase().includes(search)) {
        movie.style.display = 'none';
      } else {
        movie.style.display = 'block';
      }
    });

    /* if (String(search).length > 0) {
      titles.forEach((title) => (title.style.display = 'none'));
    } else {
      titles.forEach((title) => (title.style.display = 'block'));
    } */
  });

  return `
      <div class="Section">
        ${await MoviesPopular()}
        ${await MoviesTrendingWeek()}
        ${await TvPopular()}
      </div>
    `;
};

export default Home;
