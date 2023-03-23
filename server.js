const http = require("http");
const host = "localhost";
const port = 7000;
const fs = require("fs");
const _ = require('lodash')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  const num = _.random(0,20)
  const greet = _.once(() =>{
	console.log("hello")
  })
  greet()
  greet()

  console.log(num)
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
	  break;
	default:
		path+="404.html"
		break
  }

  res.setHeader("Content-type", "text/html");
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});
server.listen(port, host, () => {
  console.log("Listening for request");
});
