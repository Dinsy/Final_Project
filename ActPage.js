import React from 'react';
import './ActPage.css'; // Importing the CSS for styling

// Define the ActPage component
const ActPage = () => {
    return (
        // JSX to render the component
        <div>
            <h2>Please choose an option below:</h2> {/* Heading for the page */}
            <div className="button-container"> {/* Container for buttons with specific styling */}
                {/* Link styled as a button for interactive learning */}
                <a href="/scenario" className="button-link">Interactive Learning</a>

                {/* Buttons for other options, currently disabled */}
                <button className="button_act" disabled>Educational Videos</button>
                <button className="button_act" disabled>Informative Tips</button>

            </div>
        </div>
    );
};

export default ActPage; // Export the component for use in other parts of the app



