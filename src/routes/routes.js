import Home from '../containers/Home';
import Login from '../containers/Login';
import Join from '../containers/Join';
import NotFound404 from '../containers/NotFound404';
import DetailsMovie from '../containers/DetailsMovie';
import Genre from '../components/Genre';
import Header from '../components/Header';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import slidingMenu from '../utils/slidingMenu';
import register from '../utils/register';
import authentication from '../utils/authentication';
import currentUser from '../utils/currentUser';

const routes = {
  '/': Home,
  '/movie/': DetailsMovie,
  '/genre/': Genre,
  '/login/': Login,
  '/join//': Join,
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
  slidingMenu();
  currentUser();
  if (route === '/join//') {
    register();
  } else if (route === '/login/') {
    authentication();
  }
};

export default router;
