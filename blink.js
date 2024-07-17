const isEmptyObject = obj => Object.keys(obj).length === 0;
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");