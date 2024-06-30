const isWeekday = (date) => date.getDay() % 6 !== 0;
const timeFromDate = date => date.toTimeString().slice(0, 8);