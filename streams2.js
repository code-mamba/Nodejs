const fs = require('node:fs')
const readableStream = fs.createReadStream("./docs/file1.txt",{encoding:"utf-8",highWaterMark:2})
const writeStream = fs.createWriteStream('./docs/file2.txt')
readableStream.on("data",(chunk)=>{
	console.log(chunk)
	writeStream.write(chunk)
})