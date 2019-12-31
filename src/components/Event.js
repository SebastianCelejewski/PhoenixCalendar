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
  }

  enterEditMode() {
  	console.log("Entering edit mode")
  	this.setState( state => ({ mode: 'edit'	}));
  }

  acceptChange() {
  	console.log("Accepting change");
  	this.setState( state => ({mode: 'view'}));
  	this.props.onEventDescriptionChanged(this.props.event_idx, this.state.description);
  }

  rejectChange() {
  	console.log("Rejecting change");
  	this.setState( state => ({mode: 'view', description: this.props.description}));
  }

  onChange(event) {
  	console.log("onChange("+event.target+")")
  	this.setState({ description: event.target.value})
  }

  render() {
    if (this.state.mode === 'view') {
      return (
        <div className="event" onClick={this.enterEditMode}>
          {this.state.description}
        </div>
	  );
	} else {
	  return (
	  	<div className="event" >
          <textarea autoFocus value={this.state.description} onChange={this.onChange} cols="80" rows="5"/>
          <p><button onClick={this.acceptChange}>Accept</button>
          <button onClick={this.rejectChange}>Reject</button></p>
	  	</div>
	  );
	}
  }
}

export default Event;