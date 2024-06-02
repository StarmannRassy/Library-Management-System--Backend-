const express = require("express");
const env = require("dotenv").config();

const port = process.env.PORT;
const server = express();

server.get('/', (req, res) => {
    res.send('Hello World')
})
server.all('*', (req,res) => {
    res.send('Page Not available')
})
server.listen(port, (res, req) => {
  console.log(`Listening on port ${port}`);
});
