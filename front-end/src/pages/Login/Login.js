import "../../static/style/Login.css"
import user from "../../static/images/user.png";
import { Link, useNavigate } from "react-router-dom";
function Login({ setUser }) {
  const navigate = useNavigate();
  const handleLogin = () => {
    setUser(true);
    navigate("/");
  };

  return (
    <div className="login">
      <div className="login-container">
        <div>
          <div className="login-images">
            <div className="container-image">
              <img src={user} alt="user" className="user" />
            </div>
          </div>
          <div>
            <h1>Login</h1>
            <form>
              <div>
                <label>Email </label>
                <input type="email" className="inputs" />
              </div>
              <div className="password">
                <label>Password </label>
                <input type="password" className="inputs" />
              </div>
              <div className="login-btn">
                <button type="submit" value="submit" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </form>

            <Link to="/register">Create new account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
