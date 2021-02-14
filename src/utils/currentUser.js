import firebaseApp from '../utils/firebaseApp';
const { firebase } = firebaseApp();

const currentUser = () => {
  const user = firebase.auth().currentUser;

  if (user != null) {
    let name = user.displayName;
    let email = user.email;
    let photoUrl = user.photoURL;
    let emailVerified = user.emailVerified;
    let uid = user.uid;

    const MenuContainer = document.getElementById('Menu_container');
  }
};

export default currentUser;
