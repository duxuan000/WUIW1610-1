var express=require('express');
var app=express();



app.use(express.static('status'));

//访问http://127.0.0.1:8000/css/index.css

var server=app.listen(8000,'localhost',function(){
    console.log('express已启动');
    console.log('http://%s:%s',server.address().address,server.address().port);
})