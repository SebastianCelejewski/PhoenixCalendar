import { combineReducers } from 'redux'
import { EDIT_EVENT_DESCRIPTION,
         MOVE_EVENT_UP,
         MOVE_EVENT_DOWN,
         ADD_EVENT,
         DELETE_EVENT } from './actions'
import { date2string, string2date, date2dayOfWeek, addDays } from './dateUtils'

const initialCalendar = [
        {
          dayOfWeek: 'mo',
          date: '2019-12-11',
          events: [
            "Event 1",
            "Event 2."
          ]
        },
        {
          dayOfWeek: 'tu',
          date: '2019-12-12',
          events: [
            "Event 3."
          ]
        },
        {
          dayOfWeek: 'we',
          date: '2019-12-13',
          events: []
        },
        {
          dayOfWeek: 'th',
          date: '2019-12-14',
          events: [
            "Event 4.",
            "Event 5.",
            "Event 6."
          ]
        }
      ]

function expandCalendarToDefaultTimeRange(calendar) {
  var startDate = addDays(new Date(), -7)
  var endDate = addDays(new Date(), 3 * 7)

  var calendarStartDate = string2date(calendar[0].date)
  var calendarEndDate = string2date(calendar[calendar.length-1].date)

  var date = startDate
  while (date < calendarStartDate) {
    calendar.unshift(createNewDay(date))
    addDays(date, 1)
  }

  date.setTime(calendarEndDate.getTime() + 1 * 24 * 3600 * 1000)
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

const appReducers = combineReducers({
  calendar
})

export default appReducers