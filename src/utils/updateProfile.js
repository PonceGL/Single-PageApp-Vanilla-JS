import firebaseApp from '../utils/firebaseApp';
const { firebase } = firebaseApp();

const updateProfile = (Name) => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: Name,
    })
    .then(function () {
      // Update successful.
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default updateProfile;
