import dayjs from 'dayjs'

export function getPreviousTime (fecha) {
  const today = dayjs()
  const dateCompare = dayjs(fecha, 'YYYY-MM-DD')
  if (today.isSame(dateCompare, 'day')) {
    return 0
  } else if (today.subtract(1, 'day').isSame(dateCompare, 'day')) {
    return 1
  } else if (today.diff(dateCompare, 'day') <= 7) {
    return 7
  } else {
    return 30
  }
}
