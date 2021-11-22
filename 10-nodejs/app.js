/* console.log('process', process); */


/* const helpers = require("./helpers"); */


/* const {sum} = require('./helpers'); */


/* const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello world from nodejs server");
});

server.listen(3000); */

/* const total = sum(2,1);
console.log(`The total of the sum is: ${total}`); */


/* const { RSA_NO_PADDING } = require('constants');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from NodeJS Express Web Server");
})

app.listen(3000); */

const fs = require('fs');
const fileName = 'target.txt';

/* fs.watch(fileName, () => console.log(`file changed!.`)); */

/* const data = fs.readFileSync(fileName);

console.log(data.toString()); */

const errHandler = err =>  console.log(err);

const dataHandler = data => console.log(data.toString());

fs.readFile(fileName, (err, data) => {
    if(err) errHandler(err);
    dataHandler(data);
});

console.log('NodeJS async programming');