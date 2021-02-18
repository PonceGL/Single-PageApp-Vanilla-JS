import '../styles/Login.css';

const Login = () => {
  const view = `
        <div class="form_container">
          <h2 class="title_login">Log in</h2>
            <form class="form_login" id="form_Login">
              <label for="Email_Login" class="form-label">Email</label>
              <input type="email" class="form-input" id="Email_Login">
              <label for="Password_Login" class="form-label">Password</label>
              <input type="password" class="form-input" id="Password_Login">
              <button type="submit" class="form_buttom" id="form_buttom">Submit</button>
            </form>
            <div class="CreateAnAccount">
              <h3 class="CreateAnAccount_title">Create an account</h3>
                <button  type="buttom" class="CreateAnAccount_buttom" id="CreateAnAccount_buttom">
                  <a href="#/join//" class="CreateAnAccount_link">
                    Join
                  </a>
                </button>
            </div>
        </div>
    `;

  return view;
};

export default Login;
