const fs = require("fs")


fs.readFile("./names.txt",(err,data)=>{
  if(err){
    console.log(err)
  }

  console.log(data.toString())
})