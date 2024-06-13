const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const currentDate = () => new Date().toLocaleDateString('en-US');