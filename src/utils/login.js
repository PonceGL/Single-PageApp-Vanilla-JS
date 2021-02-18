import firebaseApp from './firebaseApp';
const { firebase } = firebaseApp();

const login = () => {
  const formLogin = document.getElementById('form_Login');

  const Login = (e) => {
    e.preventDefault();
    const Email = document.getElementById('Email_Login').value;
    const Password = document.getElementById('Password_Login').value;

    firebase
      .auth()
      .signInWithEmailAndPassword(Email, Password)
      .then((user) => {
        formLogin.reset();
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  formLogin.addEventListener('submit', Login);
};

export default login;
