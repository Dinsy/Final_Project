import React from 'react';
import './Scenario.css';

const Scenario = () => {
    return (
        <div className="container">
            <h2>Scenario Options:</h2>

            <div className="button-container"> {/* Updated class name */}
                <a href="/quiz" className="button-link">Response to a Terminal Diagnosis</a>
                <a href="/quiz_One" className="button-link">Supporting a Friend with Terminal Cancer</a>
                <a href="/quiz_Two" className="button-link">Navigating Family Life with a Terminal Parent</a>
                <a href="/quiz_Three" className="button-link">Balancing Caregiving and Self-Care</a>
                <a href="/quiz_Four" className="button-link">Financial Hardships with a Terminal Primary Earner</a>
                {/* Buttons for other options, currently disabled */}
                <h2><b>Coming Soon:</b></h2>
                {/* <button className="button_scen" disabled>Silent Struggles of Cancer Caregiving</button> */}
                <button className="button_scen" disabled>Communication Skills for Family and friends</button>
                <button className="button_scen" disabled> Mental Health for Cancer Caregivers</button>
            </div>
        </div>
    );
};

export default Scenario;