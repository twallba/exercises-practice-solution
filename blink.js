const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const results = await Promise.all(resultingPromises);
const lastElement = arr => arr[arr.length - 1];