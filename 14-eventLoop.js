// const { readFile } = require("fs");

// console.log("started a first task");
// //  Check file path!!
// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
//   console.log("completed first task");
// });
// console.log("starting next task");

// console.log("first");
// setTimeout(() => {
//   console.log("'second");
// }, 0);
// console.log("third");

// setInterval(() => {
//   console.log("Aye World");
// }, 0);
// console.log("I will run first");

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  console.log(req);
  res.end("hello world");
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
