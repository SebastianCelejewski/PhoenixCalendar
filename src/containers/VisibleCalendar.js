import { connect } from 'react-redux'
import { editEventDescription, moveEventUp, moveEventDown, deleteEvent } from '../actions'
import Calendar from '../components/Calendar'

const mapStateToProps = state => {
  return {
    calendar: state.calendar
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	onEventDescriptionChanged: (date, eventIdx, eventDescription) => {
  	  dispatch(editEventDescription(date, eventIdx, eventDescription))
  	},
    onEventMovedUp: (date, eventIdx) => {
      dispatch(moveEventUp(date, eventIdx))
    },
    onEventMovedDown: (date, eventIdx) => {
      dispatch(moveEventDown(date, eventIdx))
    },
    onEventDeleted: (date, eventIdx) => {
      dispatch(deleteEvent(date, eventIdx))
    }
  }
}

const VisibleCalendar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)

export default VisibleCalendar