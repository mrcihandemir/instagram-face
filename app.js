const express = require('express');
const app = express(); 
const port = process.env.PORT || 80

app.use(express.static('app'));

app.get('/', function (req, res) {
  // res.send('Hello World');
  res.sendfile('index.html');
  //res.send('hell');
});

app.listen(port, function(){
  console.log("Listening on port 3000!")
});
