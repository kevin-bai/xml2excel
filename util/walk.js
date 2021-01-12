// const fs = require('fs')
// const path = require('path')
// const util = require('util')
//
// let fileList = [];
// let dirList = [];
//
// /**
//  * 遍历目录下所有文件（同步方法）
//  * @param dir 遍历目录
//  * @param cb(pathname)
//  */
// function walk(dir, cb) {
//     let files = fs.readdirSync(dir)
//
//     files.forEach(file => {
//         // let path = dir+ '/' +file
//         let pathname = path.join(dir, file)
//         let stat = fs.statSync(pathname)
//         if (stat.isDirectory()) {
//             dirList.push(pathname)
//             walk(pathname, cb)
//         } else {
//             fileList.push(file)
//             cb(pathname);
//         }
//     })
// }


const { promisify } = require('util');
const { resolve } = require('path');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const config = require('../config/count.config.js')

console.log('config',config)

/**
 * 基于async/await异步遍历文件夹所有文件
 * @param dir
 * @returns {Promise<any>}
 */
async function walk(dir) {
    const subdirs = await readdir(dir);
    const files = await Promise.all(subdirs.map(async (subdir) => {
        const res = resolve(dir, subdir);

        if(config.onlyCountDir){
            return (await stat(res)).isDirectory() ? res : res;
        }else{
            return (await stat(res)).isDirectory() ? walk(res) : res;
        }
        
    }));
    return files.reduce((a, f) => a.concat(f), []);
}

walk(__dirname)
    .then(files => console.log(files))
    .catch(e => console.error(e));


module.exports = walk