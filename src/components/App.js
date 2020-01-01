import React from 'react';
import './App.css';
import VisibleCalendar from '../containers/VisibleCalendar.js';

const App = () => (
  <div className="App">
    <header className="App-header">Phoenix Calendar</header>
    <VisibleCalendar id="1"/>
  </div>
)

export default App;