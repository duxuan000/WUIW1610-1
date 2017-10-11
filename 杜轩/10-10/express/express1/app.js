var express=require('express');
var app=express();


app.get('/',function(req,res){
    res.send("首页");
})
app.get('/list',function(req,res){
    res.send("列表");
})
app.get('/category',function(req,res){
    res.send("栏目");
})

var server=app.listen(8000,'localhost',function(){
    console.log('express已启动');
    console.log('http://%s:%s',server.address().address,server.address().port);
})