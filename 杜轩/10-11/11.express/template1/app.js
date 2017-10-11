var express =require("express");
var app =express();
app.set("views","./views");
app.set("view engine","jade");

app.get('/',function(req,res){
    res.render('index',{
        title:"张三",
        h1:"李四",
        description:"wangwu"
    })
})

var server=app.listen(8000,'localhost',function(){
    console.log('express已启动');
    console.log('http://%s:%s',server.address().address,server.address().port);
})