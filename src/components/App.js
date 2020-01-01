import React from 'react';
import './App.css';
import VisibleCalendar from '../containers/VisibleCalendar.js';

const App = () => (
  <div className="App">
    <header className="App-header">Phoenix Calendar</header>
    <VisibleCalendar/>
    <VisibleCalendar/>
  </div>
)

export default App;