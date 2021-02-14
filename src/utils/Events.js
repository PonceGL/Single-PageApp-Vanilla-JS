const Events = () => {
  const menu = document.getElementById('buton_menu');
  const one = document.querySelector('.one');
  const two = document.querySelector('.two');
  const tree = document.querySelector('.tree');
  const genre_container = document.getElementById('genre_container');
  menu.addEventListener('click', () => {
    menu.classList.toggle('buton_menuOpen');
    one.classList.toggle('oneOpen');
    two.classList.toggle('twoOpen');
    tree.classList.toggle('treeOpen');
    genre_container.classList.toggle('genre_containerOpen');
  });

  const search = document.getElementById('search_containe');
  if (
    window.location.hash.slice(1).toLocaleLowerCase().slice(0, 7) === '/movie/'
  ) {
    window.scroll({
      top: 210,
      left: 100,
      behavior: 'smooth',
    });
    search.style.display = 'none';
  }
};
export default Events;
