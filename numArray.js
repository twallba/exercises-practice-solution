const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;