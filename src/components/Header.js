import Logo from '../assets/camera-roll.svg';
import '../styles/Header.css';

const Header = () => {
  const view = `
      <a class"Logo_link" href="/">
        <img class="Logo" src="${Logo}" alt="Movies For All Logo">
        <h1 class="Title">Movies For All</h1>
      </a>
    `;
  return view;
};

export default Header;
