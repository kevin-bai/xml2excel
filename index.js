var fs = require('fs')
var path = require('path');
var xml2js = require('xml2js');
//xml2js默认会把子子节点的值变为一个数组, explicitArray设置为false
var xmlParser = new xml2js.Parser({explicitArray : false, ignoreAttrs : true})
var json2excel = require('./util/json2excel')


var xml, jsonResult;
fs.readFile(__dirname + '/customlabel.label', {flag: 'r+', encoding: 'utf8'}, function (err, data) {
    if(err) {
        console.error(err);
        return;
    }
    xml = data;
    //console.log(xml)
    xmlParser.parseString(xml, function (err, result) {
        jsonResult = result;
        console.log(jsonResult)
        var json_data = jsonResult.CustomLabels.labels;
        json2excel(json_data,{
            des_excel_name:'streamed-workbook2'
        })
    });
});

