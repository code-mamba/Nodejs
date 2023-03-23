// creating promise

let done = false

const isItDoneYet = new Promise((resolve,reject)=>{
	if(done){
		const workDone = "Yes its done"
		resolve(workDone)
	}
	else{
		const workPending = "No still it is pending"
		reject(workPending)
	}
})

const checkIfitsDone = () =>{
	isItDoneYet.then((res)=>{
		console.log(res)
	}).catch((err)=>{
		console.log(err)
	})
}
checkIfitsDone()


const fs = require('fs')

const getfile =  (fileName) =>{
	return new Promise((resolve,reject)=>{
		fs.readFile(fileName,(err,data)=>{
			if(err){
				reject(err)
			}
			else{
				resolve(data)
			}
		})
	})
}

getfile('./views/index.html').then((data)=>{
	console.log(data.toString())
}).catch((err)=>console.log(err))


