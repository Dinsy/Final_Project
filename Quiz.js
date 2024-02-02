import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
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
            <div classname="correct">
                {selectedOption && (
                    isCorrect ?
                        <><h2>Well Done, C is the best approach!</h2>
                            <h3>Explanation:</h3>
                            <p>Option C is the best approach as it shows empathy, acknowledges Sarah's feelings, and offers support without imposing your own opinions or solutions. It allows Sarah to express her needs and feelings in a safe and understanding environment.</p>
                            <h3>Why Other Options Are Not Ideal:</h3>
                            <p><b>Option A</b> minimises Sarah's experience and imposes unrealistic positivity.</p>
                            <p><b>Option B</b> overlooks Sarah's current emotional state and jumps into problem-solving mode, which might not be what she needs at the moment.</p>
                            <p><b>Option D</b> Option D makes the situation about you and adds guilt to her already difficult situation</p>
                            <p><b>Option E</b> shows a lack of support and willingness to engage in a difficult but necessary conversation.</p></>
                        : <h3>That's not quite right, Try again!</h3>
                )}
            </div>
        </div>
    );
};

export default Quiz;
