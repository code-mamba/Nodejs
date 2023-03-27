const fs = require("node:fs");
const fileContent = fs.readFileSync("./docs/blog1.txt", "utf-8");
console.log(fileContent);
fs.readFile("./docs/blog1.txt","utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log("first")
console.log("second")
console.log("third")

fs.writeFileSync("./greet.txt","Hello world 2")
fs.writeFile("./greet.txt"," Hello world 3",{flag:"a"},(err)=>{
	if(err){
		console.log(err)
	}
	else{
		console.log("file written")
	}
})
