import React from 'react';


const Scenario = () => {
    return (
        <div className="container">
            <h2>Scenario Options</h2>

            <div className="button-container"> {/* Updated class name */}
                <a href="/quiz" className="button-link">Caring Response to a Terminal Breast Cancer Diagnosis</a>
                <a href="/quiz_1" className="button-link">Supporting a Friend with Terminal Cancer: Empathy and Understanding</a>
                <a href="/quiz_2" className="button-link">Navigating Family Dynamics with a Terminally ill Parent</a>
                <a href="/quiz_3" className="button-link">Balancing Caregiving and Self-Care for a Parent with Terminal illness</a>
                <a href="/quiz_4" className="button-link">Navigating Financial Hardships with a Terminally ill Primary Earner</a>

            </div>
        </div>
    );
};

export default Scenario;