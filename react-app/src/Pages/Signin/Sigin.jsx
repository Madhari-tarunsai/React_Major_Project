// Author: Tarunsai Madhari

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authentication } from '../../FireBase/FireBase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Sigin.css'; // Consider renaming this to 'Signup.css'

const Signup = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(Authentication, userData.email, userData.password);

      alert('register sucessfully')

      navigate('/login');
    } catch (err) {
        alert('check email or password')

      console.error("Signup Error:", err);
    }
  };

  return (
    <div className="main-container fade-in">
      <div className="main-form slide-in">
        <div className="form-heading">
          <h1>Register Page</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
          <select
            required
            onChange={(e) => setUserData({ ...userData, role: e.target.value })}
          >
            <option value="">Select Role</option>
            <option value="doctor">Doctor</option>
            <option value="pa">Patient</option>
          </select>
          <button type="submit">Sign Up</button>
        </form>
        <div className="account-info zoom-in">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
