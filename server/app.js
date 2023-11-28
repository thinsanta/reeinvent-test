const express = require('express')
const bodyParser = require('body-parser')//add this

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json());

app.get('/synonyms', (req, res) =>{
    res.send('Hello World!')
})

app.post('/addsynonym', (req, res) =>{
  console.log('Received data:', req.body);
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })