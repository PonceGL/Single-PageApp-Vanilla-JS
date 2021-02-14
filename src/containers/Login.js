import '../styles/Login.css';

const Login = () => {
  const view = `
        <h2>Login</h2>
        <div class="form_container">
            <form class="form_login" id="form_Login">
                <label for="Email_Login" class="form-label">Email</label>
                <input type="email" class="form-input" id="Email_Login">
                <label for="Password_Login" class="form-label">Password</label>
                <input type="password" class="form-input" id="Password_Login">
                <button type="submit" class="form_buttom" id="form_buttom">Submit</button>
                </form>
                <button type="submit" class="form_buttom" id="logaut_buttom">Log aut</button>
        </div>
    `;

  return view;
};

export default Login;
