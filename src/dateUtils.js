var daysOfWeek = ["su", "mo", "tu", "we", "th", "fr", "sa"]

export function string2date(dateString) {
  var parts = dateString.split("-")
  return new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]) + 1)
}

export function date2string(date) {
  return date.toJSON().slice(0,10)
}

export function date2dayOfWeek(date) {
  return daysOfWeek[date.getDay()]
}

export function addDays(date, numberOfDays) {
  date.setTime(date.getTime() + numberOfDays * 24 * 3600 * 1000)
  return date
}