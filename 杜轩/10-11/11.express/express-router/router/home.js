var express=require('express');
var router= express.Router();


router.route('/')
    .get(function(req,res){
        res.send("get home")
    })
    .post(function(req,res){
        res.send("post home")
    })

module.exports = router;