const http = require('http')

const server = http.createServer((req,res)=>{
	if(req.url == '/'){
		res.write('Hello world')
		res.end()
	}
	if(req.url == '/about'){
		res.write('About')
		res.end()
	}
})

server.listen(7000);

console.log("Listening on port 7000")
