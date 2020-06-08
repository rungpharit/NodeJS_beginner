const http = require('http');
const path = require('path');
const fs = require('fs');

//Create server
const server = http.createServer((req,res) => {
  // if(req.url === '/'){
  //   fs.readFile(path.join(__dirname,'public','index.html'),{},(err,content) => {
  //     if(err) throw err;
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.end(content)
  //   })
  // }

  // if(req.url === '/api/users'){
  //   const users = [
  //     {name : 'Rjuji',age: 24},
  //     {name : 'Team Team',age: 30},
  //   ];
  //   res.writeHead(200, {'Content-Type': 'application/json'});
  //   res.end(JSON.stringify(users));
  // } 

  //Build path file
  let pathFile = path.join(__dirname,'public',req.url === '/' ? 'index.html' : req.url);

  //Extension of file
  let extname = path.extname(pathFile);

  //Check ext and Set content type
  switch(extname) {
    case '.js' :
      contentType = 'text/javascript';
      break;
    case '.css' :
      contentType = 'text/css';
      break;
    case '.json' :
      contentType = 'application/json';
      break;
    case '.png' :
      contentType = 'image/png';
      break;
    case '.jpg' :
      contentType = 'image/jpg';
      break;
    default :
      contentType = 'text/html';
  }

  //Read File
  fs.readFile(pathFile, (err,content) => {
    if(err) {
      //page not found
      fs.readFile(path.join(__dirname,'public','404.html'),
        (err,content) => {
          res.writeHead(200,{'Content-Type' : 'text/html'});
          res.end(content,'utf8');
        }
      )
    } else {
      //Success
      res.writeHead(200,{'Content-Type' : contentType});
      res.end(content,'utf8');
    }
  })

})

server.listen(5000, () => { console.log('Server is running...')})