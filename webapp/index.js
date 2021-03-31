const express = require('express')
const app = express()
app.get('/', function (req, res) {
    res.setHeader("Content-Type","text/html")
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="http://8.140.140.120/app.css">
  </head>
  <body>
  
     <div id="content"></div>
      <script src="http://8.140.140.120/app.js"></script>
  </body>
  </html>`)
})

app.get("/app",function (req, res){
    let user = {
        "name":"dalongrong",
        "age":333
    }
    res.json(user)
})


 
app.listen(3000)