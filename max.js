const removeDuplicates = (arr) => [...new Set(arr)];
const repositoryRootPath = path.resolve(__dirname, '..');
const added = [0, 1, 2, 3, 4].map((item) => item + 1);