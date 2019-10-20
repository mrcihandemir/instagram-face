const http = require('http');
const port = process.env.PORT || 3000
var fs = require('fs'); 

/*var http = require('http');  
var url = require('url');  
var fs = require('fs'); 
*/

/*
http.createServer(function(request, response) {

	if(request.url === "/"){
		sendFileContent(response, "index.html", "text/html");
	}
	else{
		res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    console.log("Requested URL is: " + request.url);
		response.end('else');
	}
	*/
	
	/*
	fs.readFile("index.html", function(err, data){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(data);
  response.end();
});

	
	
	
}).listen(3000);

*/
function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}



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
	fs.readFile("./index.html", function(err, data){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(data);
  response.end();
});
	
	
});
  


server.listen(port,() => {
  console.log(`Server running at port `+port);
});



