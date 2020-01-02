import React from 'react'
import './Event.css'
import EditEvent from './EditEvent.js'

class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mode: 'view', description: props.description }
    this.enterEditMode = this.enterEditMode.bind(this)
    this.acceptChange = this.acceptChange.bind(this)
    this.rejectChange = this.rejectChange.bind(this)
    this.moveEventUp = this.moveEventUp.bind(this)
    this.moveEventDown = this.moveEventDown.bind(this)
    this.deleteEvent = this.deleteEvent.bind(this)
  }

  enterEditMode() {
    this.setState( state => ({ mode: 'edit' }))
  }

  moveEventUp() {
    this.props.onEventMovedUp(this.props.eventIdx)
  }

  moveEventDown() {
    this.props.onEventMovedDown(this.props.eventIdx)
  }

  deleteEvent() {
    this.props.onEventDeleted(this.props.eventIdx)
  }

  acceptChange(text) {
    this.props.onEventDescriptionChanged(this.props.eventIdx, text);
    this.setState( state => ({mode: 'view'}))
  }

  rejectChange() {
    this.setState( state => ({mode: 'view', description: this.props.description}));
  }

  render() {
    if (this.state.mode === 'view') {
      return this.renderViewMode()
    } else {
      return this.renderEditMode()
    }
  }

  renderViewMode() {
    return (
      <div className="event" >
        <span onClick={this.enterEditMode}>{this.props.description}</span>
        <span className="eventControls">
          <button className="control" onClick={this.moveEventUp}>&uarr;</button>
          <button className="control" onClick={this.moveEventDown}>&darr;</button>
          <button className="control" onClick={this.deleteEvent}>X</button>
        </span>
      </div>
    );
  }

  renderEditMode() {
    return (
      <EditEvent text={this.state.description} onAccepted={this.acceptChange} onCancelled={this.rejectChange}/>
    )
  }
}

export default Event