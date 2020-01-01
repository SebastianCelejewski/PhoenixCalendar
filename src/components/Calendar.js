import React from 'react';
import './Calendar.css';
import Day from './Day.js';

class Calendar extends React.Component {
  constructor(props) {
  	super(props);
  	this.onEventDescriptionChanged = this.onEventDescriptionChanged.bind(this);
  }

  onEventDescriptionChanged(date, eventIdx, eventDescription) {
  	this.props.onEventDescriptionChanged(date, eventIdx, eventDescription);
  }

  renderDay(day) {
    return (<Day key={day.date} dayOfWeek={day.dayOfWeek} date={day.date} events={day.events} onEventDescriptionChanged={this.onEventDescriptionChanged}/>);
  }

  render() {
  	console.log("Calendar.render, instanceId: " + this.props.id);
    console.log("My state is: " + JSON.stringify(this.props));
    return this.props.calendar.map( (day) => this.renderDay(day) );
  }
}

export default Calendar;