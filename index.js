var express = require('express');
var app = express();
var api = require('NeteaseCloudMusicApi');


app.get('/banner',async function (req, res) {
    console.log(11);
    try {
        api["banner"]({type: 0})
            .then((data) => {
                res.send(data.body);
            })
    } catch (error) {
        console.log(error)
    }
})

console.log("服务已开启，监听3000端口")
app.listen(3000);