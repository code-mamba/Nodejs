// read file
const fileSystem = require("fs");
fileSystem.readFile('./docs/blog1.txt',(err,data)=>{
	if(err){
		console.log(err)
	}
	console.log(data.toString())
})
console.log("dhanush1")
// write file
fileSystem.writeFile('./docs/blog2.txt',"Hello, world",()=>{
	console.log("File was written")
})
// directories
if (!fileSystem.existsSync("./assets")) {
  fileSystem.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fileSystem.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folderDeleted");
  });
}
// deleting files
if (fileSystem.existsSync("./docs/blog2.txt")) {
  fileSystem.unlink("./docs/blog2.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted ");
  });
}
