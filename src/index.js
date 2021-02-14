import router from './routes/routes';
import currentUser from './utils/currentUser';
import './styles/index.css';

window.addEventListener('load', router);
window.addEventListener('load', currentUser());
window.addEventListener('hashchange', router);
