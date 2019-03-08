const { resolve } = require('path');
const { readdir, stat } = require('fs').promises;

async function getFiles(dir) {
    const subdirs = await readdir(dir);
    const files = await Promise.all(subdirs.map(async (subdir) => {
        const res = resolve(dir, subdir);
        return (await stat(res)).isDirectory() ? getFiles(res) : res;
    }));
    return files.reduce((a, f) => a.concat(f), []);
}

getFiles('./merge')
    .then(files => console.log(files))
    .catch(e => console.error(e));