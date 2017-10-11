var express=require('express');
var fs=require("fs");
var app=express();

app.use(function(req,res,next){
    var t=new Date().toLocaleString();
    fs.appendFile('./time.txt',t+'\n',function(err){
        if(err) throw err;
    });
    next();
})

app.get('/', function(req, res) {
    res.send('首页');
});
app.get('/list', function(req, res) {
    res.send('列表');
});




var server=app.listen(8000,'localhost',function(){
    console.log('express已启动');
    console.log('http://%s:%s',server.address().address,server.address().port);
})