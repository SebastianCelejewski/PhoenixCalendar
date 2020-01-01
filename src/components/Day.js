import React from 'react'
import './Day.css'
import EditEvent from './EditEvent.js'
import Event from './Event.js'

class Day extends React.Component {
  constructor(props) {
    super(props)
    this.state = {mode: 'view'}
    this.onEventDescriptionChanged = this.onEventDescriptionChanged.bind(this)
    this.onEventMovedUp = this.onEventMovedUp.bind(this)
    this.onEventMovedDown = this.onEventMovedDown.bind(this)
    this.onEventDeleted = this.onEventDeleted.bind(this)
    this.enterEventAddMode = this.enterEventAddMode.bind(this)
    this.addNewEvent = this.addNewEvent.bind(this)
    this.cancelAddingNewEvent = this.cancelAddingNewEvent.bind(this)
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

  enterEventAddMode() {
    this.setState({mode: 'addNewEvent'})
  }

  addNewEvent(text) {
    this.props.onEventAdded(this.props.date, text)
    this.setState({mode: 'view'})
  }

  cancelAddingNewEvent() {
    this.setState({mode: 'view'})
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
    var events = this.props.events.map( (event, idx) => this.renderEvent(event, idx));
    return (
      <div className="day">
        <div className="dayHeader">
          <p className="dayOfWeek">{this.props.dayOfWeek}</p>
          <p className="date">{this.props.date}</p>
        </div>
        <div className="dayContents">
          {events}
          { this.state.mode === 'view' && <button onClick={this.enterEventAddMode}>+</button>}
          { this.state.mode === 'addNewEvent' && <EditEvent text="" onAccepted={this.addNewEvent} onCancelled={this.cancelAddingNewEvent}/> }
        </div>
      </div>
    );
  }
}

export default Day;