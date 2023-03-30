const buf = Buffer.alloc(100)
const len = buf.write('Hello world!')
console.log(len)
const buffLen = Buffer.byteLength(buf)
console.log(buffLen)
var buf1 = Buffer.from('xyz')
var buf2 = Buffer.from('xyz')
var a = Buffer.compare(buf1,buf2)
console.log(a)

var buffer1 = Buffer.from('x')
var buffer2 = Buffer.from('y')
var b = Buffer.compare(buffer1,buffer2)
console.log(b)

for(a of buf1.entries()){
	console.log(a)
}
var c = Buffer.alloc(12).fill('D')
console.log(c)

const myBuffer =  Buffer.from('Nigeria')
console.log(myBuffer.toString())

var myBuffer2 = Buffer.from(myBuffer)
console.log(myBuffer2)

const buff1 = Buffer.from('xyz')
console.log(buff1)
const buff2 = Buffer.from('abc')
console.log(buff2)
var arr = [buff1,buff2]
const buff3 = Buffer.concat(arr)