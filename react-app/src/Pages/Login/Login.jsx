import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom'

const Login = () => {
   
  return (
    <div className="login-container fade-in">
      <div className="login-form slide-in">
        <div className="login-heading">
          <h1>Login Page</h1>
        </div>
        <form>
          <input type="email" placeholder="Enter Email" required />
          <input type="password" placeholder="Enter Password" required />

          <div className="forgot-password zoom-in">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
        </form>
        <div className="signup-info zoom-in">
          <p>Don't have an account? <Link to="/sigin">Sigin</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
