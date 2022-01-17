import "./Login.css";
import lock from "../../images/lock.png";
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
        <div className="login-image">
          <img src={lock} alt="lock" />
        </div>

        <h1>Login</h1>
        <form className="login-form">
          <div className="login-form-control">
            <label>Email </label>
            <input type="email" className="login-input" />
          </div>
          <div className="login-form-control">
            <label>Password </label>
            <input type="password" className="login-input" />
          </div>

          <button
            type="submit"
            value="submit"
            onClick={handleLogin}
            className="login-btn"
          >
            Login
          </button>
        </form>
        <Link to="/register">Create new account</Link>
      </div>
    </div>
  );
}

export default Login;
