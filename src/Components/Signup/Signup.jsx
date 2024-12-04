import { Link } from "react-router-dom";
import './Signup.css';
 
export default function Signup() {
   let user ={username: 'nishad@gmail.com', email: 'nishad@gmail.com', phone: '1236547896', password: 'nishad@gmail.com'}
const handleSignup = (e) => {
 
localStorage.setItem("user", JSON.stringify(user));

  e.preventDefault();
   user = {
    username: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    password: e.target.password.value,
  };
 
  window.location.href = "/";
 
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
      <form className="login-form" onSubmit={handleSignup}>
        <h2 className="form-title">Sign Up</h2>
        <input
          type="text"
          placeholder="username"
          className="form-input"
          name="name"
         
        />
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          name="email"
         
        />
         <input
          type="text"
          placeholder="mobile number"
          className="form-input"
          name="phone"
         
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
           name="password"
         
        />
        <button type="submit" className="form-button">Sign In</button>
        <div className="options">
         
        
        </div>
        <p className="signup-text">
         <Link className="signup-link" to="/">Login</Link>
        </p>
      </form>
    </div>
  </div>




  );
}


