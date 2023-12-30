// App.js with react-router-dom v6+
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import VenueScreen from './screens/VenueScreen';
import OrganizerScreen from './screens/OrganizerScreen';
import TalksScreen from './screens/TalksScreen';
import AccomodationScreen from './screens/AccomodationScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/venue" element={<VenueScreen />} />
        <Route path="/talks" element={<TalksScreen />} />
        <Route path="/organizers" element={<OrganizerScreen />} />
        <Route path="/accomodation" element={<AccomodationScreen />} />

      </Routes>
    </Router>
  );
};

export default App;
