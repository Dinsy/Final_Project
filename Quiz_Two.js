import React, { useState } from 'react';
import './Quiz.css';

const Quiz_Two = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleOptionChange = (option) => {
        setSelectedOption(option);

        // Check if the answer is correct (assuming the correct answer is 'C')
        if (option === 'C') {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <div className="container">
            <h2 className="scenario-container"> Caring Response to a Terminal Breast Cancer Diagnosis</h2>
            <h3><u>Scenario:</u> Your sister, Sarah, has invited you over for coffee. During the conversation, she becomes quiet and then, with a heavy heart, reveals that she has been diagnosed with terminal breast cancer. You can see the fear and sadness in her eyes as she shares this news with you.</h3>
            <div className="button-container">
                <button onClick={() => handleOptionChange('A')}>A: "Oh, I'm sure it's not as bad as you think. You're strong, you'll beat this!"</button>
                <button onClick={() => handleOptionChange('B')}>B: "I heard about this new treatment on the news. You should try it instead of giving up."</button>
                <button onClick={() => handleOptionChange('C')}>C: "I'm here for you, Sarah. This must be so hard to share. Thank you for trusting me. How can I support you through this?"</button>
                <button onClick={() => handleOptionChange('D')}>D: "Why didn't you tell me sooner? We could have done something about it!"</button>
                <button onClick={() => handleOptionChange('E')}>E: Change the topic to avoid discussing something so uncomfortable.</button>
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