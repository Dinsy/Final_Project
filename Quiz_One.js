import React, { useState } from 'react';
import './Quiz.css';

const Quiz_One = () => {
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
            <h2 className="scenario-container"> Supporting a Friend with Terminal Cancer: Empathy and Understanding</h2>
            <h3><u>Scenario:</u> Your close friend, Alex, has called you to meet at a quiet café. During your conversation, Alex reveals that they have been diagnosed with terminal cancer. Alex expresses deep concerns about how to balance work with the impending treatment, and the uncertainty of how much time they have left. There's a mix of fear and sadness in Alex's voice as they share this news with you.</h3>
            <div className="senario-button">
                <button onClick={() => handleOptionChange('A')}>A: "I'm here for you, Alex. This is a lot to process, and it's okay to feel overwhelmed. Let's talk about how I can support you, be it with work or just being there to listen." </button>
                <button onClick={() => handleOptionChange('B')}>B: "Maybe you should just quit your job. What's the point if you don't have much time?"</button>
                <button onClick={() => handleOptionChange('C')}>C: "Wow, that's terrible. But you should focus on work; it'll keep your mind off things."</button>
                <button onClick={() => handleOptionChange('D')}>D: "I heard about this miracle cure online; you should check it out instead of giving in to despair."</button>
                <button onClick={() => handleOptionChange('E')}>E: Quickly assure Alex that everything will be fine and then change the subject to avoid the discomfort of the topic.</button>
            </div>
            <div classname="correct">
                {selectedOption && (
                    isCorrect ?
                        <><h2>Well Done, A is the best approach!</h2>
                            <h3>Explanation:</h3>
                            <p>Option A is the best approach as it shows empathy and understanding. It acknowledges the seriousness of Alex's situation and offers emotional and practical support without making assumptions or offering unsolicited advice.</p>
                            <h3>Why Other Options Are Not Ideal:</h3>
                            <p><b>Option B</b> is dismissive of Alex's current life and job, which may still hold significant meaning for them.</p>
                            <p><b>Option C</b> disregards Alex's emotional state and the gravity of their diagnosis, suggesting a distraction rather than addressing the real issue.</p>
                            <p><b>Option D</b> potentially gives false hope and overlooks the need for emotional support.</p>
                            <p><b>Option E</b> shows a lack of willingness to engage in a difficult but important conversation, offering superficial reassurance instead.</p></>
                        : <h3>That's not quite right, Try again!</h3>
                )}
            </div>
        </div>
    );
};

export default Quiz_One;
