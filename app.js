const express = require('express');
const canvas = require('canvas');
var cheerio = require('cheerio');
var request = require('request-promise');
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


/*
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
*/


function request2(url, returnBuffer = true, timeout = 10000) {
  return new Promise(function(resolve, reject) {
    console.log("req 1");
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
      console.log("req opt");
      if (err) return reject(err)
      console.log(res)
      return resolve(res)
    })
  })
}



app.post('/instagram', async function(req, res){
    const { accountName } = req.body;
    url = 'https://www.instagram.com/'+accountName;
    console.log(url);
  /*
    var options = {
        url: url,
        headers: {
          'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4'
        }
      };
      */
    var imgLink = '';
  
    await request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);
            imgLink = $('meta[property="og:image"]').attr('content');
            console.log(imgLink);
        } else {console.log(error);}
    });
  
    try {
      console.log("try");
      const externalResponse = await request2(imgLink);
      console.log("ext resp");
      res.set('Content-Type', externalResponse.headers['Content-Type'])
      return res.status(202).send(Buffer.from(externalResponse.body))
    } catch (err) {
      return res.status(404).send(err.toString())
      console.log("try error");
    }
})
