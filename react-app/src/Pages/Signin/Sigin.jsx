import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sigin.css';

const Sigin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate('/login'); 
  };

  return (
    <div className="main-container fade-in">
      <div className="main-form slide-in">
        <div className="form-heading">
          <h1>Register Page</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Name" required />
          <input type="email" placeholder="Enter Email" required />
          <input type="password" placeholder="Enter Password" required />
          <select required>
            <option value="">Select Role</option>
            <option value="doctor">Doctor</option>
            <option value="pa">Patient</option>
          </select>
          <button type="submit">Sign In</button>
        </form>
        <div className="account-info zoom-in">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Sigin;
