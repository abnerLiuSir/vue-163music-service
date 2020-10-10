var express = require('express');
var app = express();
var api = require('NeteaseCloudMusicApi');


app.get('/forword', (req, res) => {
    var query = req.query;
    var route = query.route;
    delete query.route;
    api[route](query)
        .then((data) => {
            res.send(data.body)
        })
})

console.log("服务已开启，监听3000端口")
app.listen(3000);