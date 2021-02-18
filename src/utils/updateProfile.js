import firebaseApp from './firebaseApp';
import dataBaseFirebase from './dataBaseFirebase';
const { firebase } = firebaseApp();

const updateProfile = (Name) => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: Name,
    })
    .then(() => {
      dataBaseFirebase(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default updateProfile;
