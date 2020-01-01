import { combineReducers } from 'redux'
import { EDIT_EVENT_DESCRIPTION, MOVE_EVENT_UP, MOVE_EVENT_DOWN, DELETE_EVENT } from './actions'

const initialCalendar = [
        {
          dayOfWeek: 'Monday',
          date: '2019-12-11',
          events: [
            "Event 1",
            "Event 2."
          ]
        },
        {
          dayOfWeek: 'Tuesday',
          date: '2019-12-12',
          events: [
            "Event 3."
          ]
        },
        {
          dayOfWeek: 'Wednesday',
          date: '2019-12-13',
          events: [
            "Event 4.",
            "Event 5.",
            "Event 6."
          ]
        }
      ]

function editEventDescription(action, state) {
  var newState = state.map((day) => {
    if (day.date === action.date) {
      return Object.assign({}, day, {events: day.events.map((event, idx) => {
        if (idx === action.eventIdx) {
          return action.eventDescription
        }
        return event
      })})
    } else {
      return day
    }
  })

  return newState
}

function moveEventUp(action, state) {
  var newState = state.map((day) => {
    if (day.date === action.date) {
      var dayEvents = day.events
      var movedEventIdx = action.eventIdx
      if (movedEventIdx > 0) {
        console.log("Moving event " + movedEventIdx + " up")
        var tempEvent = dayEvents[movedEventIdx-1]
        dayEvents[movedEventIdx-1] = dayEvents[movedEventIdx]
        dayEvents[movedEventIdx] = tempEvent
      }
      return Object.assign({}, day, {events: dayEvents})
    } else {
      return day
    }
  })

  return newState
}

function moveEventDown(action, state) {
  var newState = state.map((day) => {
    if (day.date === action.date) {
      var dayEvents = day.events
      var movedEventIdx = action.eventIdx
      if (movedEventIdx < dayEvents.length - 1) {
        console.log("Moving event " + movedEventIdx + " down")
        var tempEvent = dayEvents[movedEventIdx+1]
        dayEvents[movedEventIdx+1] = dayEvents[movedEventIdx]
        dayEvents[movedEventIdx] = tempEvent
      }
      return Object.assign({}, day, dayEvents)
    } else {
      return day
    }
  })

  return newState
}

function deleteEvent(action, state) {
  return state
}

function calendar(state = initialCalendar, action) {
  console.log("Handling event " + action.type)
  switch (action.type) {
    case EDIT_EVENT_DESCRIPTION:
      return editEventDescription(action, state)
    case MOVE_EVENT_UP:
      return moveEventUp(action, state)
    case MOVE_EVENT_DOWN:
      return moveEventDown(action, state)
    case DELETE_EVENT:
      return deleteEvent(action, state)
  	default:
  	  return state
  }
}

const appReducers = combineReducers({
  calendar
})

export default appReducers