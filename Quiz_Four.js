import React, { useState } from 'react';
import './Quiz.css';

const Quiz_Four = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleOptionChange = (option) => {
        setSelectedOption(option);

        // Check if the answer is correct (assuming the correct answer is 'C')
        if (option === 'E') {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <div className="main-container">
            <h2 className="scenario-container"> Navigating Financial Hardships with a Terminally Ill Primary Earner</h2>
            <h3><u>Scenario:</u> Your partner, who was the sole breadwinner of the family, has been diagnosed with a terminal illness and can no longer work. With medical expenses mounting and regular income drastically reduced, you find yourself in a challenging financial situation. You're meeting with a financial advisor, or a trusted friend experienced in financial matters, to explore your options.</h3>
            <div className="senario-button">
                <button onClick={() => handleOptionChange('A')}>A:  "I feel overwhelmed and don't know where to start with our finances."</button>
                <button onClick={() => handleOptionChange('B')}>B: "Maybe I should sell some of our assets quickly to get cash."</button>
                <button onClick={() => handleOptionChange('C')}>C: "I'm considering asking family and friends for loans, though it feels uncomfortable."</button>
                <button onClick={() => handleOptionChange('D')}>D: "I'm thinking of taking on multiple jobs to cover our expenses, regardless of the stress."</button>
                <button onClick={() => handleOptionChange('E')}>E:  "I've been hesitant to look into government assistance or charity, but maybe it's time."</button>
            </div>
            {selectedOption && (
                isCorrect ?
                    <p>Well Done, That is Correct!</p> :
                    <p>That's not quite right, Try again!</p>
            )}

        </div>
    );
};

export default Quiz_Four;
