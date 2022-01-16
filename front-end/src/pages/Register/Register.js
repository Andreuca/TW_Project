import "../../static/style/Register.css";
import register from "../../static/images/register.jpg";
function Register() {
  return (
    <div className="register">
      <div className="register-container">
        <div>
          <div className="register-images">
            <div className="container-register-image">
              <img src={register} alt="user" className="reg" />
            </div>
          </div>
          <div>
            <h1>Register</h1>
            <form>
              <div className="one">
                <div>
                  <label>Name </label>
                  <input type="text" className="register-inputs" />
                </div>
                <div>
                  <label>Surname </label>
                  <input type="text" className="register-inputs" />
                </div>
              </div>
              <div className="two">
                <div>
                  <label>Email </label>
                  <input type="email" className="register-inputs" />
                </div>
                <div className="register-password">
                  <label>Password </label>
                  <input type="password" className="register-inputs" />
                </div>
              </div>
              <div className="register-btn">
                <button type="submit" value="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
