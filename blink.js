const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
console.log(false == '0');
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const toggleBool = () => (bool = !bool);