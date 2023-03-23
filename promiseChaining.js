// promise chaining

const fs = require('fs')
const gettingFile = (fileName) =>{
	return new Promise((res,rej)=>{
		fs.readFile(fileName,(err,data)=>{
			if(err){
				console.log(err)
				rej(err)
			}
			else{
				console.log(data)
				res(data)
			}
		})
	})
}

gettingFile('./views/index.html').then((data)=>{
	console.log(data.toString())
}).then(()=>{
	fs.readFile('./views/about.html',(err,data)=>{
		if(err){
			console.log(err)
		}
		else{
			console.log(data.toString())
		}
	})
})
