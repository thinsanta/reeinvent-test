const express = require('express')
const bodyParser = require('body-parser')
const NodeCache = require( "node-cache" );

const app = express()
const port = process.env.PORT || 5000
const myCache = new NodeCache();


app.use(bodyParser.json());

app.get('/synonyms', (req, res) =>{
    res.send('Hello World!')
})

app.post('/addsynonym', (req, res) =>{
  myCache.set(req.body.word, req.body)
  //console.log('Received data:', req.body);
  let value = myCache.get(req.body.word)
  //console.log("Cached items: " + JSON.stringify(value))
  mykeys = myCache.keys();
  console.log("Cached items: " + mykeys)
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })