// a = '2023-01-28T07:14:43.731Z'
// console.log(a)
// b = '2023-02-11T09:38:04.631Z'
// console.log(b)
// a = new Date(a)
// console.log("1",a)
// b = new Date(b)
// console.log('1',b)

// c = b-a
// console.log(c)

// a = '2023-02-11T09:38:04.631Z'
// b = '2023-02-10T09:56:55.227Z'

// c = new Date(b) - new Date(a)
// console.log(c) 
// a = new Date('2023-02-10T09:56:55.227Z')
// b = new Date('2023-02-11T09:38:04.631Z')
// c = b - a
// console.log(c)

const numbers = [74,18,10,5]

numbers.sort((a,b)=>{
	return a-b
})

console.log(numbers)