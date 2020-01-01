import React from 'react';
import './Day.css';
import Event from './Event.js';

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.onEventDescriptionChanged = this.onEventDescriptionChanged.bind(this);
    this.onEventMovedUp = this.onEventMovedUp.bind(this);
    this.onEventMovedDown = this.onEventMovedDown.bind(this);
    this.onEventDeleted = this.onEventDeleted.bind(this);
  }

  onEventDescriptionChanged(eventIdx, eventDescription) {
    this.props.onEventDescriptionChanged(this.props.date, eventIdx, eventDescription);
  }

  onEventMovedUp(eventIdx) {
  	this.props.onEventMovedUp(this.props.date, eventIdx);
  }

  onEventMovedDown(eventIdx) {
  	this.props.onEventMovedDown(this.props.date, eventIdx);
  }

  onEventDeleted(eventIdx) {
  	this.props.onEventDeleted(this.props.date, eventIdx);
  }

  renderEvent(event, idx) {
    return (
      <Event
        key={idx}
        eventIdx={idx}
        description={event}
        onEventDescriptionChanged={this.onEventDescriptionChanged}
        onEventMovedUp={this.onEventMovedUp}
        onEventMovedDown={this.onEventMovedDown}
        onEventDeleted={this.onEventDeleted}
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