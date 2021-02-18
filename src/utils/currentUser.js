import firebaseApp from './firebaseApp';
import dataBaseFirebase from './dataBaseFirebase';
const { firebase } = firebaseApp();

const currentUser = () => {
  firebase.auth().onAuthStateChanged((user) => {
    const nameUser = document.getElementById('NameUser');
    const logaut = document.getElementById('Logaut');
    const login = document.getElementById('Login');
    const join = document.getElementById('Join');

    if (user != null) {
      let name = user.displayName;

      login.style.display = 'none';
      join.style.display = 'none';
      logaut.style.display = 'block';
      nameUser.style.display = 'block';
      nameUser.innerHTML = `<a href="#/" class="Menu_link">${name}</a>`;
    } else {
      login.style.display = 'block';
      join.style.display = 'block';
      logaut.style.display = 'none';
      nameUser.style.display = 'none';
    }

    const Logaut = (e) => {
      e.preventDefault();
      firebase
        .auth()
        .signOut()
        .then(
          () => {
            console.log('Signed Out');
          },
          function (error) {
            console.error('Sign Out Error', error);
          }
        );
    };

    logaut.addEventListener('click', Logaut);
  });
};

export default currentUser;
