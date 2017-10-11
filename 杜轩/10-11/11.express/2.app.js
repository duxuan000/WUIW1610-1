var express=require('express');
var app=express();

app.get('/',function(req,res,next){
    console.log('1');
    next();
},function(req,res){
    console.log('2');
    res.send("b");
})


var server=app.listen(8000,'localhost',function(){
    console.log('express已启动');
    console.log('http://%s:%s',server.address().address,server.address().port);
})