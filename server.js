const http = require("http")
const host = "localhost"
const port = 7000
const fs = require('fs')

const server = http.createServer((req,res)=>{
	console.log(req.url,req.method)
	res.setHeader("Content-type","text/html")
	fs.readFile("./views/index.html",(err,data)=>{
		if(err){
			console.log(err)
			res.end()
		}
		else{
			// res.write(data)
			res.end(data)
		}
	})

})
server.listen(port,host,()=>{
	console.log("Listening for request")
})