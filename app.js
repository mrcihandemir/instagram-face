const express = require('express');
const canvas = require('canvas');
var cheerio = require('cheerio');
const app = express(); 
const port = process.env.PORT || 80
const { get } = require('request');
//const fetch = require("node-fetch"); 
//global.fetch = require("node-fetch");
global.fetch = require('node-fetch'); 


app.use(express.static('/app'));

app.get('/', function (req, res) {
  // res.send('Hello World');
  res.sendfile('index.html');
  //res.send('hell');
});

app.listen(port, function(){
  console.log("Listening port!")
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(require("body-parser").json());






app.post('/fetch_external_image', async (req, res) => {
  console.log("req.body başla");
  console.log(req.body);
  console.log(req);
  console.log("req.body bitir");
  const { imageUrl } = req.body  
  if (!imageUrl) {
    return res.status(400).send('imageUrl param required')
  }
  try {
    const externalResponse = await request(imageUrl)
    res.set('content-type', externalResponse.headers['content-type'])
    return res.status(202).send(Buffer.from(externalResponse.body))
  } catch (err) {
    return res.status(404).send(err.toString())
  }
})

function request(url, returnBuffer = true, timeout = 10000) {
  return new Promise(function(resolve, reject) {
    const options = Object.assign(
      {},
      {
        url,
        isBuffer: true,
        timeout,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'
        }
      },
      returnBuffer ? { encoding: null } : {}
    )

    get(options, function(err, res) {
      if (err) return reject(err)
      return resolve(res)
    })
  })
}



app.post('/instagram', async function(req, res){
    const { accountName } = req.body;
    url = 'https://www.instagram.com/'+accountName;
    console.log(url);
  
    request(url, function(error, response, html){
        if(!error){
          var $ = cheerio.load(html);
          var result = $('meta[property="og:image"]').attr('content');
          console.log(result);
          return result;
        } else { console.log("error instagram request"); }
    })
})

