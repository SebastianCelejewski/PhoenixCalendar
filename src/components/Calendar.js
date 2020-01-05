import React from 'react'
import './Calendar.css'
import Day from './Day.js'

class Calendar extends React.Component {
  constructor(props) {
  	super(props)
  	this.onEventDescriptionChanged = this.onEventDescriptionChanged.bind(this)
    this.onEventMovedUp = this.onEventMovedUp.bind(this)
    this.onEventMovedDown = this.onEventMovedDown.bind(this)
    this.onEventDeleted = this.onEventDeleted.bind(this)
    this.onEventAdded = this.onEventAdded.bind(this)
    this.onAddedWeekBefore = this.onAddedWeekBefore.bind(this)
    this.onAddedWeekAfter = this.onAddedWeekAfter.bind(this)
  }

  onEventDescriptionChanged(date, eventIdx, eventDescription) {
  	this.props.onEventDescriptionChanged(date, eventIdx, eventDescription)
  }

  onEventMovedUp(date, eventIdx) {
    this.props.onEventMovedUp(date, eventIdx)
  }

  onEventMovedDown(date, eventIdx) {
    this.props.onEventMovedDown(date, eventIdx)
  }

  onEventAdded(date, text) {
    this.props.onEventAdded(date, text)
  }

  onEventDeleted(date, eventIdx) {
    this.props.onEventDeleted(date, eventIdx)
  }

  onAddedWeekBefore() {
    this.props.onAddedWeekBefore()
  }

  onAddedWeekAfter() {
    this.props.onAddedWeekAfter()
  }

  renderDay(day) {
    return (<Day
      key={day.date}
      dayOfWeek={day.dayOfWeek}
      date={day.date}
      events={day.events}
      onEventDescriptionChanged={this.onEventDescriptionChanged}
      onEventMovedUp={this.onEventMovedUp}
      onEventMovedDown={this.onEventMovedDown}
      onEventAdded={this.onEventAdded}
      onEventDeleted={this.onEventDeleted}
    />)
  }

  render() {
    var days = this.props.calendar.map( (day) => this.renderDay(day) )
    return (
      <React.Fragment>
      <button onClick={this.onAddedWeekBefore}>Add week before</button>
      <table>
        <tbody>
          {days}
        </tbody>
      </table>
      <button onClick={this.onAddedWeekAfter}>Add week after</button>
      </React.Fragment>
    )
  }
}

export default Calendar