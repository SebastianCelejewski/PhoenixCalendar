import React from 'react';
import './Event.css';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: 'view', description: props.description }
    this.enterEditMode = this.enterEditMode.bind(this);
    this.acceptChange = this.acceptChange.bind(this);
    this.rejectChange = this.rejectChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.moveEventUp = this.moveEventUp.bind(this);
    this.moveEventDown = this.moveEventDown.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  enterEditMode() {
    this.setState( state => ({ mode: 'edit' }));
  }

  moveEventUp() {
    this.props.onEventMovedUp(this.props.eventIdx);
  }

  moveEventDown() {
    this.props.onEventMovedDown(this.props.eventIdx);
  }

  deleteEvent() {
    this.props.onEventDeleted(this.props.eventIdx);
  }

  acceptChange() {
    this.props.onEventDescriptionChanged(this.props.eventIdx, this.state.description);
    this.setState( state => ({mode: 'view'}));
  }

  rejectChange() {
    this.setState( state => ({mode: 'view', description: this.props.description}));
  }

  onChange(event) {
    this.setState({ description: event.target.value})
  }

  render() {
    if (this.state.mode === 'view') {
      return this.renderViewMode();
    } else {
      return this.renderEditMode();
    }
  }

  renderViewMode() {
    return (
      <div className="event" >
        <span onClick={this.enterEditMode}>{this.props.description}</span>
        <span className="eventControls">
          <button onClick={this.moveEventUp}>&uarr;</button>
          <button onClick={this.moveEventDown}>&darr;</button>
          <button onClick={this.deleteEvent}>X</button>
        </span>
      </div>
    );
  }

  renderEditMode() {
    return (
      <div className="event" >
        <textarea autoFocus value={this.state.description} onChange={this.onChange} cols="80" rows="5"/>
        <p><button onClick={this.acceptChange}>Accept</button>
        <button onClick={this.rejectChange}>Reject</button></p>
      </div>
    );
  }
}

export default Event;