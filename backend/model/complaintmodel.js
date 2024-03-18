const mongoose = require("mongoose")

const complaintchema  = mongoose.Schema({

  name:{
    type: String,
    require: true
  },
  email:{
  type: String,
  require: true
  },
  Complaint:{
    type: String,
    require: true
    },
    
})

module.exports= mongoose.model("teacher",  complaintchema)