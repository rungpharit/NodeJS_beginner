const fs= require('fs');
const path = require('path');

//Create floder
fs.mkdir(path.join(__dirname,'/test'),{}, (err) => {
  if(err) throw err;
  console.log('Folder was created....')
});

//Create and Write file
fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello world', (err) => {
  if(err) throw err;
  console.log('Folder was create and written')
});

//Read File
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data) => {
  if(err) throw err;
  console.log('Read hello.txt: ',data)
});