import http from "http";
// const http = require('http');

const hostname = "127.0.0.1";
const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World!\n");
// });

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  // res.write('<h1 style="color: red">Hello World!</h1>');
  // res.write('<p>I wonder what else we can send...</p>');
  switch (
    req.url //Observe the url AFTER the main routing (http://localhost:3000)
  ) {
    case "/":
      res.write('<h1 style="color: red">Hello Home Page!</h1>');
      break;
    case "/pageTwo":
      res.write(`<h1 style="color: green">Hello Page 2</h1>`);
      break;
    case "/pageThree":
      res.write(`<h1 style="color: blue">Hello Page 3</h1>`);
      break;
    default:
      res.statusCode = 404;
      res.write("404 Page Not Found");
      break;
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
