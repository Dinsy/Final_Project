import React, { useState } from 'react';
import './Quiz.css';

const Quiz_Two = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleOptionChange = (option) => {
        setSelectedOption(option);

        // Check if the answer is correct (assuming the correct answer is 'C')
        if (option === 'A') {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <div className="main-container">
            <h2 className="scenario-container"> Navigating Family Dynamics with a Terminally Ill Parent</h2>
            <h3><u>Scenario:</u> Your mother has recently been diagnosed with a terminal illness. She has been a pillar of strength in your family, and the news has been devastating for everyone. You and your sister, Emily, have always had different approaches to dealing with emotional situations. You've just received the news and are about to have a conversation with Emily about how to move forward.</h3>
            <div className="senario-button">
                <button onClick={() => handleOptionChange('A')}>A: "Let's sit down together and discuss how we can support Mom in a way that respects her wishes and needs. We should also talk about how we're feeling and support each other."</button>
                <button onClick={() => handleOptionChange('B')}>B: "I know this is hard, but we need to stay strong for Mom. Let's not show our emotions too much around her; we don't want to make her feel worse."</button>
                <button onClick={() => handleOptionChange('C')}>C: "We need to start planning for the worst immediately. Let's talk about healthcare directives and end-of-life care."</button>
                <button onClick={() => handleOptionChange('D')}>D: "I think we should just try to keep things normal for as long as possible. Mom wouldn't want us to fuss over her."</button>
                <button onClick={() => handleOptionChange('E')}>E: "I'm not ready to talk about this yet. Let's just deal with it as it comes."</button>
            </div>
            {selectedOption && (
                isCorrect ?
                    <p>Well Done, That is Correct!</p> :
                    <p>That's not quite right, Try again!</p>
            )}

        </div>
    );
};

export default Quiz_Two;
