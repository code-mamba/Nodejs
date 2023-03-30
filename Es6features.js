// let is only acessible in block level it is deffined

const { sum } = require("lodash")

// if(true){
// 	let a = 2
// 	console.log(a) 
// }
// console.log(a)

// let a = 50
// let b = 100
// if(true){
// 	let a = 60
// 	var c = 10
// 	console.log(a/c)
// 	console.log(b/c)
// }
// console.log(c)
// console.log(a)

// const is used to assign the value constant to the variable the value cannot be changed
// const a = 50 
// a = 60
// const b = "Constant variable"
// b = "Assigning new variable"

const languages = ['js', 'ruby', 'python', 'go']
// languages = "javascript"
languages.push('java')
console.log(languages)

// arrow function 
function oldOne(){
	console.log("Hello world...!")
}
var newOne = () =>{
	console.log("hello world")
}
newOne()
oldOne()
// default parameter
let func = (a,b=10)=>{
	return a+b
}
console.log(func(20))

let arr = [2,3,4,5,6]
for(let val of arr){
	console.log(val)
}

let string  = "javascript"
for(let letter of string){
	console.log(letter)
}

// spread attribut
let sumElements = (arr) =>{
	console.log(arr)
	let sum = 0
	for(let element of arr){
		sum+=element
	}
	console.log(sum)
}
sumElements([10,20,30,40,50])

let sumElements2 = (...arr) =>{
	console.log(arr)
	let sum = 0
	for(let i of arr){
		sum+=i
	}
	console.log(sum)
}
sumElements2(34,2,1,45,68,)

let arr1 = [20,30,474,32]
console.log(Math.max(...arr1))