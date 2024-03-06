// NumberOfEvents.js
import React from "react";

const NumberOfEvents = ({ eventNumber, setCurrentNOE, setErrorAlert }) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);

    let infoText;
    if (isNaN(value) || value <= 0 || value > 50) {
      infoText = "Please enter a valid number";
    } else {
      infoText = "";
    }
    setErrorAlert(infoText);
  };
  return (
    <div id="numberOfEvents">
      <input type="text" value={eventNumber} onChange={handleInputChange} />
    </div>
  );
};

export default NumberOfEvents;
