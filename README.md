# Node.js Server Port Conflict

This repository demonstrates a common error in Node.js development: attempting to start a server on a port that is already in use.

## Bug

The `bug.js` file contains a simple HTTP server that attempts to listen on port 8080. If another application is already using this port, the server will fail to start and throw an error.

## Solution

The `bugSolution.js` file addresses this issue by checking if the port is available before attempting to start the server.  It uses a more robust method to handle the port in use error, including providing a more user-friendly message.