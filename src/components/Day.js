import React from 'react';
import './Day.css';
import Event from './Event.js';

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.onEventDescriptionChanged = this.onEventDescriptionChanged.bind(this);
  }

  onEventDescriptionChanged(key, eventDescription) {
    this.props.onEventDescriptionChanged(this.props.date, key, eventDescription);
  }

  renderEvent(event, idx) {
    return (
      <Event
        key={idx}
        eventIdx={idx}
        description={event}
        onEventDescriptionChanged={this.onEventDescriptionChanged}
      />
    );
  }

  render() {
    console.log("Day.render, date: " + this.props.date);
    var events = this.props.events.map( (event, idx) => this.renderEvent(event, idx));
    return (
      <div className="day">
        <div className="dayHeader">
          <p className="dayOfWeek">{this.props.dayOfWeek}</p>
          <p className="date">{this.props.date}</p>
        </div>
        <div className="dayContents">
          {events}
        </div>
      </div>
    );
  }
}

export default Day;