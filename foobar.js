const results = await Promise.all(resultingPromises);
const merge = [...new Set(a.concat(b))];
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};