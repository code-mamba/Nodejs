
const request = new XMLHttpRequest();


request.onreadystatechange = () =>{
	if(request.readyState == 4){
		if(request.status == 200){
			console.log(request.responseText)
		}
		else{
			console.log('error')
		}
	}
}

request.open("GET","https://jsonplaceholder.typicode.com/posts/1")
request.send()
// synchronous
function doSomething(){
	const a = 1
	const b = 2
	const c = a * b
	console.log(c)
}
doSomething()
