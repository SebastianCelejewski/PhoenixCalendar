import React from 'react';
import './Calendar.css';
import Day from './Day.js';

class Calendar extends React.Component {

  renderDay(day) {
    return (<Day dayOfWeek={day.dayOfWeek} date={day.date} events={day.events}/>);
  }

  render() {
    return this.props.calendar.map( (day) => this.renderDay(day) );
  }
}

export default Calendar;