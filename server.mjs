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
      res.write(
        '<img src="https://www.magnificentworld.com/wp-content/uploads/2021/01/Guam.jpg" height=200px></img>'
      );
      break;
    case "/pageTwo":
      res.write(`<h1 style="color: green">Hello Page 2</h1>`);
      res.write(
        '<img src="https://a.cdn-hotels.com/gdcs/production49/d1519/6f89ae5d-542c-4fee-b333-a35761fe33d1.jpg" height=200px></img>'
      );
      break;
    case "/pageThree":
      res.write(`<h1 style="color: blue">Hello Page 3</h1>`);
      res.write(
        '<img src="https://www.bing.com/ck/a?!&&p=4bb6e1282a7851ed24de3ee2d3255a1f56e925bab227ca667c632a6650d395ecJmltdHM9MTc0NDMyOTYwMA&ptn=3&ver=2&hsh=4&fclid=23a2e361-014e-6f17-2dc3-f6a000e36ec5&u=a1L2ltYWdlcy9zZWFyY2g_cT1ndWFtJTIwcGljJkZPUk09SVFGUkJBJmlkPUNCMTU0NTRGQjlCN0YzODMwQTlDRUQ2NUQ1OEExRjNGMzQxQzkyRDU&ntb=1" height=200px></img>'
      );

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
