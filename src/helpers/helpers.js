import moment from 'moment'

export const formatDate = (date) => {
  const day = moment(date).format('MMM DD')
  const today = moment().format('MMM DD')
  return today === day ? moment(date).format('HH:mm') : day
}

export function randomChoice(arr) {
  return arr[Math.floor(arr.length * Math.random())]
}
