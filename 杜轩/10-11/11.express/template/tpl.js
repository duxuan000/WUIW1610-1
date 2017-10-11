
var render=function(tpl,data){
   return tpl.replace(/\{\{(\w+)\}\}/g,function(){
        return data[arguments[1]];
    })
}


var content ='<div><h2>{{title}}</h2><p>{{content}}</p></div>';

var data=[
    {
        title:"qw",
        content:'wvlnvldndnld'
    },
    {
        title:"qw",
        content:'wvlnvldndnld'
    }
]

data.forEach(function(v){
    console.log(render(content,v));
})
