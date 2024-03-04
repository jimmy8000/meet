// NumberOfEvents.js
import React from 'react';

const NumberOfEvents = ({ eventNumber, setCurrentNOE }) => {
    const handleInputChange = (event) => {
        const value = event.target.value;
        setCurrentNOE(value);
    }
    return (
        <div id="numberOfEvents">
            <input
              type="text"
              value={eventNumber}
              onChange={handleInputChange}
            />
        </div>
       )
}

export default NumberOfEvents;