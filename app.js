var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var moment = require('moment');
var multer  = require('multer');
// var upload = multer({ dest: './uploads/' });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
  res.render('index.html');
});

app.post('/getFileSize',multer({ dest: './uploads/'}).single('upload'),function(req,res){
  var a =req.file;
   var fileSize = {
     "size":a.size+" bytes"
   };
   res.send(fileSize);
});



var port = Number(process.env.PORT || 3000);
app.listen(port, function(){
  console.log("Server running on Port: "+port);
});