const { throws } = require("assert")
const fs = require("fs")
const path = require("path")
const dirPath = path.join(__dirname,"crud")

const filePath = `${dirPath}/apple.txt`


//create file
// fs.writeFileSync(filePath, "This is a simple text files")

//read file
// fs.readFile(filePath,"utf8", (err,item)=>{
//     console.log(item)
// })

//update
// fs.appendFile(filePath, " and file name is apple.txt", (err)=>{
//     if(err) throw err
//     console.log("The data is appended")
// } )

//rename
// fs.rename(filePath,`${dirPath}/fruit.txt`, (err)=>{
//     if(err) throw err
//     console.log("File is renamed")
// })

//delete
// fs.unlinkSync(`${dirPath}/fruit.txt`)