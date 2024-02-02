import React, { useState } from 'react';
import './Quiz.css';

const Quiz_Three = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleOptionChange = (option) => {
        setSelectedOption(option);

        // Check if the answer is correct (assuming the correct answer is 'C')
        if (option === 'B') {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <div className="main-container">
            <h2 className="scenario-container"> "Balancing Caregiving and Self-Care for a Parent with Terminal Illness"</h2>
            <h3><u>Scenario:</u> Your father has been diagnosed with a terminal illness, and you've taken on the primary role of his caregiver. While you're committed to providing the best care for him, you also recognize the need to look after your own health and well-being. Your friend, Morgan, who has experience in caregiving, offers to talk about how you can manage both responsibilities.</h3>
            <div className="senario-button">
                <button onClick={() => handleOptionChange('A')}>A: "I'm trying to schedule some 'me time' once a week, but I feel guilty leaving my dad even for a short while."</button>
                <button onClick={() => handleOptionChange('B')}>B: "Coordinating care giving with family, friends; finding free support groups for relief."</button>
                <button onClick={() => handleOptionChange('C')}>C: "I've decided to dedicate all my time to caring for my dad. My own needs can wait until after he's better."</button>
                <button onClick={() => handleOptionChange('D')}>D:"I don't think I need any self-care. I find looking after my dad fulfilling enough."</button>
                <button onClick={() => handleOptionChange('E')}>E: "I've been staying up late to get some alone time, but I'm always too tired to do anything enjoyable."</button>
            </div>
            {selectedOption && (
                isCorrect ?
                    <p>Well Done, That is Correct!</p> :
                    <p>That's not quite right, Try again!</p>
            )}

        </div>
    );
};

export default Quiz_Three;