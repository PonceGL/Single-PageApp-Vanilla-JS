import firebaseApp from './firebaseApp';
import dataBaseFirebase from './dataBaseFirebase';
const { firebase } = firebaseApp();

const addWatchList = () => {
  const user = firebase.auth().currentUser;
  const id = window.location.hash.slice(1).split('/')[2];
  const movie = window.location.hash.slice(1).split('/')[1];
  const mas = document.getElementById('mas');
  const menos = document.getElementById('menos');
  mas.addEventListener('click', () => {
    mas.style.display = 'none';
    menos.style.display = 'block';
    dataBaseFirebase(user, id, movie);
  });
  menos.addEventListener('click', () => {
    mas.style.display = 'block';
    menos.style.display = 'none';
  });
};

export default addWatchList;
