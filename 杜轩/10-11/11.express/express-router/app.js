var express=require('express');
var app=express();


var home=require('./router/home');
var list=require('./router/list');

app.use('/',home);
app.use('/list',list);

var server=app.listen(8000,'localhost',function(){
    console.log('express已启动');
    console.log('http://%s:%s',server.address().address,server.address().port);
})