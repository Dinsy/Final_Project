// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from './firebase'; // Import the initialized auth object
import './App.css'; // CSS for all pages

function Login() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Replace these with your actual email and password input values
      const email = 'user@example.com';
      const password = 'password123';

      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error('Login failed', error.message);
    }
  };

  return (
    <Router>
      <div>
        <div className="header-section">
          <img src={logo} alt="Logo" className="logo" />
          <h1>Angelus</h1>
        </div>
        <div className="nav-section">
          <nav>
            <ul>
              <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
              <li><NavLink to="/act" activeClassName="active-link">Scenario</NavLink></li>
              <li><NavLink to="/task" activeClassName="active-link">Tasks</NavLink></li>
              {user ? (
                <li><Link to="/logout">Logout</Link></li>
              ) : (
                <li><Link to="/login">Login</Link></li>
              )}
            </ul>
          </nav>
        </div>

        <Routes>
          {/* Add your existing routes here */}
          {/* ... */}
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>

        <footer>
          <p><a href="/contact">Contact Us</a> | Follow Angelus on Social Media</p>
        </footer>
      </div>
    </Router>
  );
}

function LoginPage({ onLogin }) {
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

function LogoutPage() {
  // Implement your logout logic here using Firebase Authentication
  return (
    <div>
      <h2>Logout Page</h2>
      {/* Add your logout logic here */}
    </div>
  );
}

export default Login;

