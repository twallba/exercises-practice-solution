const updated = numbers.filter(element => element > 6);
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentDate = () => new Date().toLocaleDateString('en-US');