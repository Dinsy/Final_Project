import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskPage from './TaskPage/TaskPage'; //imports task
import HomePage from './HomePage/HomePage'; // imports home page
import ActPage from './ActPage/ActPage' // imports ActPage
import ContactForm from './ContactForm/ContactForm'; // imports contact page
import Quiz from './AllQuiz/Quiz'; // imports quiz page
import Quiz_One from './AllQuiz/Quiz_One'; // imports quiz page
import Quiz_Two from './AllQuiz/Quiz_Two'; // imports quiz page
import Quiz_Three from './AllQuiz/Quiz_Three'; // imports quiz page
import Quiz_Four from './AllQuiz/Quiz_Four'; // imports quiz page
import './App.css'; // CSS for all pages
import { NavLink } from 'react-router-dom'; //adds hover
import logo from './Pictures/Angelus_Logo.png';
import Scenario from './Scenario/Scenario';

function App() {
  return (
    //This is the route / title / nav bar
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
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/task" element={<TaskPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/act" element={<ActPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/scenario" element={<Scenario />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz_One" element={<Quiz_One />} />
          <Route path="/quiz_Two" element={<Quiz_Two />} />
          <Route path="/quiz_Three" element={<Quiz_Three />} />
          <Route path="/quiz_Four" element={<Quiz_Four />} />
        </Routes>
        <footer>
          <p><a href="/contact">Contact Us</a> | Follow Angelus on Social Media</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

