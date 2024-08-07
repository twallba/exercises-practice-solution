const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");