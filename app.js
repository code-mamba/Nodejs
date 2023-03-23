const express = require("express");
const app = express();

// listen for request
app.listen(9380);

app.get("/", (req, res) => {
  // res.send('<p>Home page</p>')
  res.sendFile("./views/index.html", { root: __dirname });
  console.log(req.url);
});
app.get("/about", (req, res) => {
  // res.send('<p>About page</p>')
  res.sendFile("./views/about.html", { root: __dirname });
  console.log(req.url);
});
// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});
// 404 page
app.use((req, res)=>{
	res.status(404).sendFile('./views/404.html',{root:__dirname})
})
