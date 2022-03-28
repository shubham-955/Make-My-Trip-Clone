import React, { Profiler } from 'react';
import './App.css';
import { CarousalUI } from './Components/CarousalUI';
import { SimpleSlider } from './Components/SimpleSlider';
import { FlightsCard } from "./Components/FlightsCard"
import { Trips } from './Components/Trips';
import { Profile } from './Components/Profile';
function App() {
  return (
    <div className="container">
      <CarousalUI />
      <div style={{ marginTop: 50 }}>
        <SimpleSlider />
      </div>
      <div style={{ marginTop: 50, paddingLeft: 100, paddingRight: 100 }}>
        <img src="https://mmt.servedbyadbutler.com/getad.img/;libID=3405582" style={{ width: "100%", height: "80%" }} />
      </div>
      <div style={{ marginTop: 50 }}>
        <FlightsCard />
      </div>
      <div style={{ marginTop: 50 }}>
        <Trips />
      </div>
      <div style={{ marginTop: 50 }}>
        <Profile />
      </div>
    </div>
  );
}

export default App;
