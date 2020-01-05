import { combineReducers } from 'redux'
import { EDIT_EVENT_DESCRIPTION,
         MOVE_EVENT_UP,
         MOVE_EVENT_DOWN,
         ADD_EVENT,
         DELETE_EVENT,
         ADD_WEEK_BEFORE,
         ADD_WEEK_AFTER } from './actions'
import { date2string, string2date, date2dayOfWeek, cloneDate, addDays } from './dateUtils'

const initialCalendar = [
        {
          dayOfWeek: 'mo',
          date: '2020-01-11',
          events: [
            "Event 1",
            "Event 2."
          ]
        },
        {
          dayOfWeek: 'tu',
          date: '2020-01-12',
          events: [
            "Event 3."
          ]
        },
        {
          dayOfWeek: 'we',
          date: '2020-01-13',
          events: []
        },
        {
          dayOfWeek: 'th',
          date: '2020-01-14',
          events: [
            "Event 4.",
            "Event 5.",
            "Event 6."
          ]
        }
      ]

function expandCalendarToDefaultTimeRange(calendar) {
  var startDate = cloneDate(new Date(), -7)
  var endDate = cloneDate(new Date(), 3 * 7)

  var calendarStartDate = string2date(calendar[0].date)
  var calendarEndDate = string2date(calendar[calendar.length-1].date)

  var date = cloneDate(calendarStartDate, -1)
  while (date > startDate) {
    calendar.unshift(createNewDay(date))
    addDays(date, -1)
  }

  date = cloneDate(calendarEndDate, 1)
  while (date <= endDate) {
    calendar.push(createNewDay(date))
    addDays(date, 1)
  }

  return calendar
}

function createNewDay(date) {
  return {
    date: date2string(date),
    dayOfWeek: date2dayOfWeek(date),
    events: []
  }
}

function calendar(state = expandCalendarToDefaultTimeRange(initialCalendar), action) {
  console.log("Handling event " + action.type)
  switch (action.type) {
    case EDIT_EVENT_DESCRIPTION:
      return editEventDescription(action, state)
    case MOVE_EVENT_UP:
      return moveEventUp(action, state)
    case MOVE_EVENT_DOWN:
      return moveEventDown(action, state)
    case ADD_EVENT:
      return addEvent(action, state)
    case DELETE_EVENT:
      return deleteEvent(action, state)
    case ADD_WEEK_BEFORE:
      return addWeekBefore(action, state)
    case ADD_WEEK_AFTER:
      return addWeekAfter(action, state)
    default:
      return state
  }
}

function editEventDescription(action, state) {
  return [].concat(state).map((day) => {
    if (day.date === action.date) {
      day.events[action.eventIdx] = action.eventDescription
    }
    return day
  })
}

function moveEventUp(action, state) {
  return [].concat(state).map((day, index, array) => {
    if (day.date === action.date) {
      if (action.eventIdx > 0) {        
        var tempEvent = day.events[action.eventIdx-1]
        day.events[action.eventIdx-1] = day.events[action.eventIdx]
        day.events[action.eventIdx] = tempEvent
      } else {
        if (index > 1) {
          array[index-1].events.push(day.events[action.eventIdx])
          day.events.splice(action.eventIdx, 1)
        }
      }
    }
    return day
  })
}

function moveEventDown(action, state) {
  return [].concat(state).map((day, index, array) => {
    if (day.date === action.date) {
      if (action.eventIdx < day.events.length - 1) {        
        var tempEvent = day.events[action.eventIdx+1]
        day.events[action.eventIdx+1] = day.events[action.eventIdx]
        day.events[action.eventIdx] = tempEvent
      } else {
        if (index < array.length - 1) {
          array[index+1].events.unshift(day.events[action.eventIdx])
          day.events.splice(action.eventIdx, 1)
        }
      }
    }
    return day
  })
}

function addEvent(action, state) {
  return [].concat(state).map((day) => {
    if (day.date === action.date) {
      day.events.push(action.text)
    }
    return day
  })
}

function deleteEvent(action, state) {
  return [].concat(state).map((day) => {
    if (day.date === action.date) {
      day.events.splice(action.eventIdx, 1)
    }
    return day
  })
}

function addWeekBefore(action, state) {
  var calendarCurrentStartDate = string2date(state[0].date)
  var calendarNewStartDate = cloneDate(calendarCurrentStartDate, -7)
  var date = cloneDate(calendarCurrentStartDate, -1)

  var newState = [].concat(state)
  while (date >= calendarNewStartDate) {
    newState.unshift(createNewDay(date))
    addDays(date, -1)    
  }

  return newState
}

function addWeekAfter(action, state) {
  var calendarCurrentEndDate = string2date(state[state.length - 1].date)
  var calendarNewEndDate = cloneDate(calendarCurrentEndDate, 7)
  var date = cloneDate(calendarCurrentEndDate, 1)

  var newState = [].concat(state)
  while (date <= calendarNewEndDate) {
    newState.push(createNewDay(date))
    addDays(date, 1)
  }

  return newState
}

const appReducers = combineReducers({
  calendar
})

export default appReducers