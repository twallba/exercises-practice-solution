console.log(false === '0');
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const toggleBool = () => (bool = !bool);