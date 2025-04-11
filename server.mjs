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
        '<img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/i8v1v92sfkikn0ro47ba/ScubaDivingLessonsinGuambyJNSDives.jpg" height=200px></img>'
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
