const fs = require('fs')
const path =require('path')
const json2excel = require('./util/json2excel');
const walk = require('./util/walk')

let allpages = [];

const sourceDir = './countingDir';

walk(sourceDir).then(function (files) {
    console.log('files',files)
    allpages = files.map(item =>{
        let file = path.parse(item)
        return {pathname: file.base}
    })
    console.log(allpages)

    json2excel(allpages,{
        des_excel_name:'count-file'
    })
})


