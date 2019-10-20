const express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  // res.send('Hello World');
  //res.sendfile('index.html');
  res.send('hellö');
});

app.listen(3000, function(){
  console.log("Listening on port 3000!")
});
