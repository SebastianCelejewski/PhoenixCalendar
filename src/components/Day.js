import React from 'react';
import './Day.css';
import Event from './Event.js';

class Day extends React.Component {
	constructor(props) {
		super(props);
		this.onEventDescriptionChanged = this.onEventDescriptionChanged.bind(this);
	}

	onEventDescriptionChanged(key, eventDescription) {
		console.log("Day knows that event " + key + " description changed to: " + eventDescription)
		this.props.onEventDescriptionChanged(this.props.date, key, eventDescription);
	}

	render() {
		var events = this.props.events.map( (event, idx) => <Event key={idx} event_idx={idx} description={event} onEventDescriptionChanged={this.onEventDescriptionChanged}/>);
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