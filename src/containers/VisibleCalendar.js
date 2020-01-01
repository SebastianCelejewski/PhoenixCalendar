import { connect } from 'react-redux'
import { editEventDescription } from '../actions'
import Calendar from '../components/Calendar'

const mapStateToProps = state => {
  console.log("Mapping state to props:");
  console.log(JSON.stringify(state));
  return {
    calendar: state.calendar
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	onEventDescriptionChanged: (date, eventIdx, eventDescription) => {
  	  dispatch(editEventDescription(date, eventIdx, eventDescription))
  	}
  }
}

const VisibleCalendar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)

export default VisibleCalendar