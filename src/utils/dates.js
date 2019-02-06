const dates = {
  toWeekdayMonthDay,
  toHourMinute24,
}

export default dates;

function toWeekdayMonthDay(dt) {
  if (typeof dt === 'number') {
    dt = new Date(dt);
  }

  return dt.toLocaleDateString(navigator.language, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

function toHourMinute24(dt) {
  if (typeof dt === 'number') {
    dt = new Date(dt);
  }

  return dt.toLocaleTimeString(navigator.language, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });
}
