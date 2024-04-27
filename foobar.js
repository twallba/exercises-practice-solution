const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const merge = (a, b) => a.concat(b);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
console.log(false === '0');
var regexp  = new RegExp('{{([^}]+)}}', 'g');
var arr3 = "jones".split('');