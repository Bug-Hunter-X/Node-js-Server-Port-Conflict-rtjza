const http = require('http');
const { isPortTaken } = require('./utils'); // Helper function

const port = 8080;

async function startServer(){
  const isTaken = await isPortTaken(port);
  if (isTaken) {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    return;
  }

  const requestListener = (request, response) => {
    response.writeHead(200);
    response.end('Hello, World!');
  };

  const server = http.createServer(requestListener);

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
startServer();
//utils.js
const net = require('net');

async function isPortTaken(port) {
  return new Promise((resolve) => {
    const tester = net.createServer()
      .once('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .once('listening', () => tester.close())
      .listen(port);
  });
}

module.exports = { isPortTaken };