var express=require('express');
var router= express.Router();


    router.route('/')
        .get(function(req,res){
            res.send("<h1>get list</h1>");
        })
        .post(function(req,res){
            res.send("<h2>123</h2>");
        })

    router.route('/show')
        .get(function(req,res){
            res.send("get show");
        })
        .post(function(req,res){
            res.send("post show");
        })

module.exports = router;