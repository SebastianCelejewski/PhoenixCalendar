import React from 'react';
import './Event.css';

function Event(props) {
	return (
		<div class="event">{props.description}</div>
	);
}

export default Event;