
import { Link } from "react-router-dom"
import './Login.css';

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      
      window.location.href = "/Login";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    
    <div className="login-container">
    <div className="login-background">
      <div className="overlay"></div>
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
        className="logo"
      />
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="form-title">Sign In</h2>
        <input
          type="email"
          placeholder="Email or mobile number"
          className="form-input"
          name="email"
         
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
           name="password"
         
        />
        <button type="submit" className="form-button">Sign In</button>
        <div className="options">
          <label>
            <input type="checkbox" className="remember-me" /> Remember me
          </label>
          <a href="#" className="forgot-password">Forgot password?</a>
        </div>
        <p className="signup-text">
          New to Netflix? <a  className="signup-link"><Link to="/signup">Signup</Link></a>
        </p>
      </form>
    </div>
  </div>




  );
}

export default Login;
