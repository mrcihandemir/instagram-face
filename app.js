const http = require('http');
const port = process.env.PORT || 3000
var http = require('http');  
var url = require('url');  
var fs = require('fs'); 

const server = http.createServer((req, res) => {
  //var path = 'index.html';
  var path = url.parse(request.url).pathname;  
  fs.readFile(__dirname + path, function(error, data) {  
                response.writeHead(200, {  
                    'Content-Type': 'text/html'  
                });  
                response.write(data);  
                response.end();                  
            });  
  /*
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  var sayfa = '<html><head><title>instagram face</title>';
  sayfa = sayfa + "<script>function Getir(ip) { alert(ip);}</script>";
  sayfa = sayfa + '</head>';
  sayfa = sayfa + '<body>';
  sayfa = sayfa + '<h1>profile name: <input type="text" name="ip" id="ip"><br><button onclick="Getir(document.getElementById(\'ip\').value)">Getir</button></h1>';
  sayfa = sayfa + '</body></html>';
  res.end(sayfa);
  */
  
});
  

server.listen(port,() => {
  console.log(`Server running at port `+port);
});


