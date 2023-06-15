const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/login") {
    if (req.method == "POST") {
      res.end("login page");
    } else {
      res.end("login method error");
    }
  } else {
    res.end("node http");
  }
});
server.listen(3000, () => {
  console.log("server is runing");
});
