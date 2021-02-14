import firebaseApp from '../utils/firebaseApp';
const { firebase } = firebaseApp();

const authentication = () => {
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
        console.log(user);
        console.log('Logeado');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  formLogin.addEventListener('submit', Login);

  const logautButtom = document.getElementById('logaut_buttom');

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

  logautButtom.addEventListener('click', Logaut);
};

export default authentication;
