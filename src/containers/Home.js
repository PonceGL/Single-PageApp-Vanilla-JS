import MoviesPopular from '../components/MoviesPopular';
import MoviesTrendingWeek from '../components/MoviesTrendingWeek';
import TvPopular from '../components/TvPopular';
import '../styles/Section.css';

const Home = async () => {
  const view = `
  <div class="Section">
    ${await MoviesPopular()}
    ${await MoviesTrendingWeek()}
    ${await TvPopular()} */
  </div>
`;

  return view;
};

export default Home;
