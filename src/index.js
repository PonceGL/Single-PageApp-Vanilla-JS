import router from './routes/routes';
/* import Search from './utils/Search'; */
import './styles/index.css';

window.addEventListener('load', router);
/* window.addEventListener('load', Search); */
window.addEventListener('hashchange', router);
