const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
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
  res.writeHead(301, { Location: 'https://google.com.tr' });
});
  

server.listen(port,() => {
  console.log(`Server running at port `+port);
});


