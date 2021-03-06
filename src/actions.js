export const EDIT_EVENT_DESCRIPTION = 'EDIT_EVENT_DESCRIPTION'
export const MOVE_EVENT_UP = 'MOVE_EVENT_UP'
export const MOVE_EVENT_DOWN = 'MOVE_EVENT_DOWN'
export const ADD_EVENT = 'ADD_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const ADD_WEEK_BEFORE = 'ADD_WEEK_BEFORE'
export const ADD_WEEK_AFTER = 'ADD_WEEK_AFTER'

export function editEventDescription(date, eventIdx, eventDescription) {
  return { type: EDIT_EVENT_DESCRIPTION, date, eventIdx, eventDescription }
}

export function moveEventUp(date, eventIdx) {
  return { type: MOVE_EVENT_UP, date, eventIdx}
}

export function moveEventDown(date, eventIdx) {
  return { type: MOVE_EVENT_DOWN, date, eventIdx}
}

export function addEvent(date, text) {
  return { type: ADD_EVENT, date, text}
}

export function deleteEvent(date, eventIdx) {
  return { type: DELETE_EVENT, date, eventIdx}
}

export function addWeekBefore() {
  return { type: ADD_WEEK_BEFORE }
}

export function addWeekAfter() {
  return { type: ADD_WEEK_AFTER }
}