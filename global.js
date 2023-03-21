// global object
console.log(global)

global.setTimeout(()=>{
	console.log("Hi Dhanush")
	clearInterval(int)
},3000)

const int = setInterval(()=>{
	console.log("Set interval will keep runs repetedly depends on the seconds we mentioned")
},1000)

console.log(__dirname)
console.log(__filename)