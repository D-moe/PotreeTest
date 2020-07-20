const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'potree')));
var http = require('http');
var fs = require('fs');

const port=8080; 

//app.get('/', (req, res) => res.sendFile('index.html'))
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
/*
fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});*/
