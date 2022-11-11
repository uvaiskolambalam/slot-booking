const mongoos = require("mongoose");


const slotBookingSchema =new mongoos.Schema(
    {
      name:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true
      },
      mobile:{
        type:Number,
        required:true
      },
      address:{
        type:String,
        required:true
      },
      city:{
        type:String,
        required:true
      },
      state:{
        type:String,
        required:true
      },
      pin:{
        type:Number,
        required:true
      },
      registerd:{
        type:Boolean,
        default:true
      },
      staus:{
        type:String,
        default:"pending"
      },
      userId:{
        type:String,
        required:true
      },
      completed:{
        type:Boolean,
        default:false
      }
    }
  
  )
  
  const slotBookingModel = mongoos.model("slotBooking", slotBookingSchema);
  
  module.exports = slotBookingModel;