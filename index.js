const express = require('express');
const app = express();

app.get('/list', function(req, res) {

    res.header ('Access-Control-Allow-Origin', '*');
    res.header ('Access-Control-Allow-Credentials', true);
    res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header ('Access-Control-Allow-Headers', 'Content-Type');

const sql = require("mssql/msnodesqlv8");

const config = {
    driver: "msnodesqlv8",
    user: 'xelcode',
    password: 'xelcode',
    server: '10.100.200.62',
    database: 'xelcode',
    options: {
    }
};

sql.connect(config, function(err) {
    if(err) console.error(err);
    let sqlRequest = new sql.Request();
    let sqlQuery = 'Select * From dbo.LogHeader WHERE Id < 10';
    sqlRequest.query(sqlQuery, function(err, data) {
        if (err) console.error(err);
        res.send(JSON.stringify(data));
        sql.close();
    });
});
});


const webserver = app.listen(8080, function() {
    console.log('Web server is running...');
})