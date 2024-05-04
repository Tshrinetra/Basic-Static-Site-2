const express = require("express");
const app =express();
app.use(express.urlencoded({extended:true}))
app.get("/details",(req,res)=>{
      let id = req.query.id;

if(id === undefined){
      res.send("Invalid Request");
}
else if(id.length == 2){
      res.send("Specify the value");
}
else {
      res.send(`Request received with value ${id}`);
}
})
app.listen(3000,(err)=>{
      console.log("Server Started");
})

