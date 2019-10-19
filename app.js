const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>profile name: <input type="text" name="ip" id="ip"><br>
          <button onclick="Getir(document.getElementById('ip').value)">Getir</button>
          </h1>');
});
  
  
    function Getir(ip) {
    //var sum = parseInt(a) + parseInt(b);
    alert(ip);
  }
  ;

server.listen(port,() => {
  console.log(`Server running at port `+port);
});


