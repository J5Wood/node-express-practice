const http = require("http");

const server = http.createServer((req, resp) => {
  if (req.url === "/") {
    resp.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    resp.end("Here is a short history");
  }
  resp.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/" >Home Page</a>
  `);
});

server.listen(5000);
