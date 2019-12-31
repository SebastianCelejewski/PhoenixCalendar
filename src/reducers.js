import { combineReducers } from 'redux'

const initialCalendar = [
        {
          dayOfWeek: 'Monday',
          date: '2019-12-11',
          events: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Ut vel facilisis felis, nec luctus neque."
          ]
        },
        {
          dayOfWeek: 'Tuesday',
          date: '2019-12-12',
          events: [
            "Aenean pretium nec erat in iaculis."
          ]
        },
        {
          dayOfWeek: 'Wednesday',
          date: '2019-12-13',
          events: [
            "Morbi vitae ex egestas, bibendum sem a, varius dolor.",
            "Vivamus efficitur lobortis leo tristique feugiat.",
            "Vivamus semper, leo eu semper tincidunt, nisl metus convallis ex, sed interdum velit lectus et libero. Maecenas in tortor eget nisl posuere molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            "Ut non egestas nulla, eu maximus neque."
          ]
        },
        {
          dayOfWeek: 'Thursday',
          date: '2019-12-14',
          events: [
            "Aliquam quis elementum sem, ac blandit libero. Quisque malesuada auctor metus, id mattis dui venenatis eu.",
            "Curabitur scelerisque, lectus non ullamcorper laoreet, nisl metus maximus odio, vitae suscipit massa orci quis nibh."
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