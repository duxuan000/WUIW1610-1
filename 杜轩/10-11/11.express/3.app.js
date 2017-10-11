var express=require('express');
var app=express();

app.use(function(req,res,next){
   req.money=10000;
    next();
})
app.use(function(req,res,next){
    req.money=req.money-4000;
    next();
})
app.use(function(req,res,next){
    req.money=req.money-2000;
    next();
})
app.use(function(req,res,next){
    req.money=req.money-2000;
    next();
})
app.use(function(req,res,next){
    req.money=req.money-1000;
    next();
})
app.use(function(req,res,next){
    req.money=req.money-500;
    next();
})

app.get("/",function(req,res){
    res.send(req.money+'');
})


var server=app.listen(8000,'localhost',function(){
    console.log('express已启动');
    console.log('http://%s:%s',server.address().address,server.address().port);
})