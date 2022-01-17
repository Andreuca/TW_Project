import "./Register.css";
import user from "../../images/user.jpg";
function Register() {
  return (
    <div className="register">
      <div className="register-container">
        <div className="register-image">
          <img src={user} alt="user"  />
        </div>

        <h1>Register</h1>
        <form className="register-form">
          <div className="register-form-control">
            <label>First Name </label>
            <input type="text" className="register-input" />
          </div>
          <div className="register-form-control">
            <label>Last Name</label>
            <input type="text" className="register-input" />
          </div>

          <div className="register-form-control">
            <label>Email </label>
            <input type="email" className="register-input" />
          </div>
          <div className="register-form-control">
            <label>Password </label>
            <input type="password" className="register-input" />
          </div>

          <button type="submit" value="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
