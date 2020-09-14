const express = require('express');
const app = express();
const bodyParser = require("body-parser");
//used for parsing the query from request body
app.use(bodyParser.text());

//the post method available under localhost:8080/list
app.post('/list', function(req, res) {
    //CORS headers (depending on the environment might be not needed)
    res.header ('Access-Control-Allow-Origin', '*');
    res.header ('Access-Control-Allow-Credentials', true);
    res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header ('Access-Control-Allow-Headers', 'Content-Type');
const sql = require("mssql/msnodesqlv8");

//config of the database connection
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
    if(err) console.error(err);2
    let sqlRequest = new sql.Request();
    //parse the query from the request body, if its not there, use the default query (first 5 objects)
    let requestData = JSON.parse(req.body).query;
    let sqlQuery = requestData?requestData:'SELECT * FROM dbo.LogHeader ORDER BY MobileUserId OFFSET 0 ROWS FETCH NEXT 5 ROWS ONLY';
    sqlRequest.query(sqlQuery, function(err, data) {
        //display error if sth goes wrong
        if (err) console.error(err);
        //send stringified data
        res.send(JSON.stringify(data));
        sql.close();
    });
});
});
//webserver on 8080
const webserver = app.listen(8080, function() {
    console.log('Web server is running...');
})