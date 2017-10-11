var express=require('express');
var app=express();

app.get('/a?cd', function(req, res) {
    res.send('a?cd');
});

app.get('/ad+in', function(req, res) {
    res.send('ad+in');
});

app.get('/zy*yz', function(req, res) {
    res.send('zy*yz');
});

app.get('/12(56)?34', function(req, res) {
    res.send('12(56)?34');
});



var server=app.listen(8000,'localhost',function(){
    console.log('express已启动');
    console.log('http://%s:%s',server.address().address,server.address().port);
})