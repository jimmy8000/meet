// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const date = new Date(event.created).toLocaleString();

  return (
    <li className="event">
      <h1>{event.summary}</h1>
      <p>{date}</p>
      <p>{event.location}</p>
      <button
        className="showDetailsButton"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide details" : "Show details"}
      </button>
      {showDetails ? (
        <div className="details">
          <h3>Event Details</h3>
          <p>{event.description}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
