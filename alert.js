var arr3 = "jones".split('');
const removeDuplicates = (arr) => [...new Set(arr)];
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());