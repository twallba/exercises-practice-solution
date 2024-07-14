const minNumber = arr => Math.min(...arr);
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());