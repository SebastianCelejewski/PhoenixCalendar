import { connect } from 'react-redux'
import Calendar from '../components/Calendar'

const mapStateToProps = state => {
  return {
    calendar: state.calendar
  }
}

const mapDispatchToProps = dispatch => {
	return {}
}

const VisibleCalendar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)

export default VisibleCalendar