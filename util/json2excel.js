const Excel = require('exceljs');

let start_time = new Date();

/**
 * jsonArr转excel
 * @param jsonArr 要转换的json数组
 * @param option  workbookName，columns
 */
function json2excel(jsonArr,option) {
    //输出excel文件名路径
    let defaulWorkbookName= './streamed-workbook.xlsx';
    //columns名字和对应的json键
    let defaultColumns = [
        { header: Object.keys(jsonArr[0])[0], key: Object.keys(jsonArr[0])[0] }
    ]
    let workbookName = `./dist/${option.des_excel_name}.xlsx` || defaulWorkbookName;
    let columns = option.columns || defaultColumns;
    let workbook = new Excel.stream.xlsx.WorkbookWriter({
        filename: workbookName
    });
    // let data = json.CustomLabels.labels;

    console.log(jsonArr)
    //console.log(JSON.parse(data))

    let worksheet = workbook.addWorksheet('Sheet');
    worksheet.columns = columns
    let length = jsonArr.length;

// 当前进度
    let current_num = 0;
    let time_monit = 400;
    let temp_time = Date.now();

    console.log('开始添加数据');
// 开始添加数据
    for(let i in jsonArr) {
        worksheet.addRow(jsonArr[i]).commit();
        current_num = i;
        if(Date.now() - temp_time > time_monit) {
            temp_time = Date.now();
            console.log((current_num / length * 100).toFixed(2) + '%');
        }
    }
    console.log('添加数据完毕用时：', (Date.now() - start_time) +'ms');
    workbook.commit();
    console.log("程序执行完毕");

}


module.exports = json2excel