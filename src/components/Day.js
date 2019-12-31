import React from 'react';
import './Day.css';
import Event from './Event.js';

function Day(props) {
	var events = props.events.map( (event) => <Event description={event}/>);
	return (
		<div className="day">
			<div className="dayHeader">
				<p className="dayOfWeek">{props.dayOfWeek}</p>
				<p className="date">{props.date}</p>
			</div>
			<div className="dayContents">
				{events}
			</div>
		</div>
	);
}

export default Day;