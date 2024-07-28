const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));