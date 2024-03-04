// App.js
import React, { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents, extractLocations } from './api';

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  useEffect(() => {
    const fetchData = async () => {
      const allEvents = await getEvents();
      const locationFilteredEvents = currentCity === "See all cities" ?
        allEvents : 
        allEvents.filter(event => event.location === currentCity);
      const eventsToShow = locationFilteredEvents.slice(0, currentNOE);
      setEvents(eventsToShow);
      setAllLocations(extractLocations(allEvents));
    };

    fetchData();
  }, [currentCity, currentNOE]);

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents eventNumber={currentNOE} setCurrentNOE={setCurrentNOE} />
      <EventList events={events} />
    </div>
  );
}

export default App;
