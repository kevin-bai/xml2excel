var fs = require('fs')
var path = require('path');
var xml2js = require('xml2js');
//xml2js默认会把子子节点的值变为一个数组, explicitArray设置为false
var xmlParser = new xml2js.Parser({explicitArray : false, ignoreAttrs : true})
//var parseString = require('xml2js').parseString;
var Excel = require('exceljs');

var start_time = new Date();
var workbook = new Excel.stream.xlsx.WorkbookWriter({
    filename: './streamed-workbook.xlsx'
});

var xml, jsonResult;
fs.readFile(__dirname + '/customlabel.label', {flag: 'r+', encoding: 'utf8'}, function (err, data) {
    if(err) {
        console.error(err);
        return;
    }
    xml = data;
    //console.log(xml)
    xmlParser.parseString(xml, function (err, result) {
        //console.dir(JSON.stringify(result));
        jsonResult = result;
        console.log(jsonResult)
        json2excel(jsonResult)
    });
});


function json2excel(json) {
    var data = json.CustomLabels.labels;

    console.log(data)
    //console.log(JSON.parse(data))

    var worksheet = workbook.addWorksheet('Sheet');

    worksheet.columns = [
        { header: 'fullName', key: 'fullName' },
        { header: 'shortDescription', key: 'shortDescription' },
        { header: 'value', key: 'value' }
    ];

    var length = data.length;

// 当前进度
    var current_num = 0;
    var time_monit = 400;
    var temp_time = Date.now();

    console.log('开始添加数据');
// 开始添加数据
    for(let i in data) {
        worksheet.addRow(data[i]).commit();
        current_num = i;
        if(Date.now() - temp_time > time_monit) {
            temp_time = Date.now();
            console.log((current_num / length * 100).toFixed(2) + '%');
        }
    }
    console.log('添加数据完毕：', (Date.now() - start_time));
    workbook.commit();

    var end_time = new Date();
    var duration = end_time - start_time;

    console.log('用时：' + duration);
    console.log("程序执行完毕");

}

