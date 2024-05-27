const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
var arr1 = "john".split('');