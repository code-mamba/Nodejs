console.log('user1 made request')
setTimeout(callback,5000)
console.log('user2 made request')
setTimeout(callback,5000)
console.log('user3 made request')
setTimeout(callback, 5000)

function callback(){
	console.log("queried the database and it taken 5 minutes for getting response")
}