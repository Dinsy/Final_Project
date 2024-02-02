import React, { useState } from 'react';
import './ContactForm.css'; // CSS for ContactForm pages

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [selection, setSelection] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [comment, setComment] = useState(''); // New state for comment

  const options = ["Help", "Enquiry", "Career", "Other"]; // Your options

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the email submission here (e.g., send to an API or server)
    console.log('Submitted email:', email);
    console.log('Selected option:', selection);
    console.log('Comment:', comment); // Log the comment
    // Reset the email input after submission
    setEmail('');
    setComment(''); // Reset the comment input
  };

  return (
    <>
      <h2>Contact Page</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="email">Email:*</label>
        <input
          type="email"
          id="email"
          placeholder="Write Your Email Here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* Custom Dropdown */}
        <label htmlFor="selection">Title:</label>
        <div className="custom-dropdown">
          <div className="dropdown-selected" onClick={() => setShowDropdown(!showDropdown)}>
            {selection || "What is the reason for your email:"}
          </div>
          {showDropdown && (
            <ul className="dropdown-options">
              {options.map((option, index) => (
                <li key={index} onClick={() => { setSelection(option); setShowDropdown(false); }}>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Comment input */}
        <label htmlFor="comment">Comment:*</label>
        <textarea
          id="comment"
          placeholder="Write your comment here"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

    </>
  );
};

export default ContactForm;
