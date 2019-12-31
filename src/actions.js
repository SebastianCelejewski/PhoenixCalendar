export const EDIT_EVENT_DESCRIPTION = 'EDIT_EVENT_DESCRIPTION'

export function editEventDescription(date, eventIdx, eventDescription) {
  return { type: EDIT_EVENT_DESCRIPTION, date, eventIdx, eventDescription }
}