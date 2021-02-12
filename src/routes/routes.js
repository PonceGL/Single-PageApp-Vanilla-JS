import Home from '../containers/Home';
import NotFound404 from '../containers/NotFound404';
import DetailsMovie from '../containers/DetailsMovie';
import Header from '../components/Header';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
/* import Register from '../containers/Register';  */

const routes = {
  '/': Home,
  '/movie/': DetailsMovie,
  /* '/register': Register, */
};

const router = async () => {
  const header = null || document.getElementById('Header');
  const main = null || document.getElementById('Main');
  const footer = null || document.getElementById('Footer');

  header.innerHTML = await Header();

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : NotFound404;

  main.innerHTML = await render();
};

export default router;
