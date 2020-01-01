import React from 'react';
import './EditEvent.css';

class EditEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {text: props.text}
    this.acceptChange = this.acceptChange.bind(this)
    this.cancelChange = this.cancelChange.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  acceptChange() {
    this.props.onAccepted(this.state.text)
  }

  cancelChange() {
    this.props.onCancelled()
  }

  onChange(event) {
    this.setState({ text: event.target.value})
  }

  render() {
    return (
      <div className="event" >
        <textarea autoFocus value={this.state.text} onChange={this.onChange} cols="80" rows="5"/>
        <p><button onClick={this.acceptChange}>Accept</button>
        <button onClick={this.cancelChange}>Cancel</button></p>
      </div>
    );
  }
}

export default EditEvent