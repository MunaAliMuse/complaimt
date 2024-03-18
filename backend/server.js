const express = require("express")

const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/Complaint").then(()=>{
    console.log("database connect successfull")
}).catch((error)=>{
    console.log("error",error)
})

const complaintmodel = require("./model/complaintmodel")
//create new data
  app.post("/create",async  (req,res)=>{
    const newData = complaintmodel(req.body)
    const Data = await newData.save()
    if(Data){
       res.send(Data)
    }
  })
   // Read data API start
app.get("/teacher", async (req,res)=>{
  const getData = await complaintmodel.find()
  if(getData){
    res.send(getData)
  }
})





app.listen(1000,()=> console.log("server is running"))