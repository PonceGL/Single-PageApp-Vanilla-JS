import firebaseApp from '../utils/firebaseApp';
import updateProfile from './updateProfile';
const { firebase } = firebaseApp();

const register = () => {
  const formJoin = document.getElementById('form_Join');

  const Join = (e) => {
    e.preventDefault();
    const Name = document.getElementById('Name_Join').value;
    const Email = document.getElementById('Email_Join').value;
    const Password = document.getElementById('Password_Join').value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then((user) => {
        formJoin.reset();
        updateProfile(Name);
      })
      .catch((error) => {
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  formJoin.addEventListener('submit', Join);
};

export default register;
