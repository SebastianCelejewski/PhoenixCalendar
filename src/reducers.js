import { combineReducers } from 'redux'

const initialCalendar = [
        {
          dayOfWeek: 'Monday',
          date: '2019-12-11',
          events: [
            "Event 1",
            "Event 2"
          ]
        },
        {
          dayOfWeek: 'Tuesday',
          date: '2019-12-12',
          events: [
            "Event 3"
          ]
        },
        {
          dayOfWeek: 'Wednesday',
          date: '2019-12-13',
          events: [
            "Event 4",
            "Event 5",
            "Event 6"
          ]
        }
      ]

function calendar(state = initialCalendar, action) {
  switch (action.type) {
  	default:
  	  return state
  }
}

const appReducers = combineReducers({
  calendar
})

export default appReducers