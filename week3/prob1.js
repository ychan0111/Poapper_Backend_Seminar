
const http = require('http')

const fs = require('fs');

require('date-utils');
var dt = new Date();
var d = dt.toFormat('YYYY-MM-DD HH24:MI:SS');


const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == '/') {
      fs.readFile('./timer.html', (err, d) => {
        if(err) throw err
        res.write(d)
        res.end()
      });
    }
  });

server.listen(8080)
server.on('listening',() =>{
    console.log("server is running on 8080 port.")
})

server.on('error', (error)=>{
    console.log(error)
})
