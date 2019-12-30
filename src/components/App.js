import React from 'react';
import './App.css';
import Calendar from './Calendar.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [
        {
          dayOfWeek: 'Monday',
          date: '2019-12-11',
          events: [
            "Event 1",
            "Event 2"
          ]
        },
        {
          dayOfWeek: 'Tuesday',
          date: '2019-12-12',
          events: [
            "Event 3"
          ]
        },
        {
          dayOfWeek: 'Wednesday',
          date: '2019-12-13',
          events: [
            "Event 4",
            "Event 5",
            "Event 6"
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Phoenix Calendar</header>
        <Calendar days={this.state.days}/>
      </div>
    );
  }
}

export default App;