const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    if (Math.random() < 0.5) {
      // Simulate a successful request
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Success!');
    } else {
      // Simulate a failure without proper error handling
      // This will cause the response to hang without sending any data to the client
      console.error('Something went wrong!'); 
    }
  }, 1000);
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});