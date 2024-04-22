const express = require('express')
const fs = require('fs')
var bodyParser = require('body-parser');
var path = require('path');
const app = express()
const port = 3000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json({limit: '50mb'}))

app.get('/uploads/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, './src/uploads', fileName);
    
    res.sendFile(filePath);
  });

app.post('/upload', (req, res) => {
    const imageData = req.body.imageData
    const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const fileName = req.body.imageName;

    fs.writeFile(path.join(__dirname, 'src/uploads', fileName), buffer, (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Failed to save image');
        } else {
          res.send('Image saved successfully');
        }
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})