import '../styles/Join.css';

const Join = () => {
  const view = `
        <h2>Join</h2>
        <div class="form_container">
            <form class="form_join" id="form_Join">
                <label for="Name_Join" class="form-label">Name</label>
                <input type="text" class="form-input" id="Name_Join">
                <label for="Email_Join" class="form-label">Email</label>
                <input type="email" class="form-input" id="Email_Join">
                <label for="Password_Join" class="form-label">Password</label>
                <input type="password" class="form-input" id="Password_Join">
                <button type="submit" class="form_buttom" id="form_buttom">Submit</button>
            </form>
        </div>
    `;

  return view;
};

export default Join;
