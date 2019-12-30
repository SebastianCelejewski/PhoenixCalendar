import React from 'react';
import './Day.css';
import Event from './Event.js';

function Day(props) {
	var events = props.events.map( (event) => <Event description={event}/>);
	return (
		<div class="day">
			<div class="dayHeader">
				<p class="dayOfWeek">{props.dayOfWeek}</p>
				<p class="date">{props.date}</p>
			</div>
			<div class="dayContents">
				{events}
			</div>
		</div>
	);
}

export default Day;