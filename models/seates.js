const mongoos = require("mongoose");

const seatSchema = new mongoos.Schema(
  {
    seatNo: {
      type: String,
      default: "",
    },
    applicant: {
      type: String,
      default: null,
    },
    
     disabled:{
       type:Boolean,
       default:false
    },
    registerId:{
        type:String,
        default:null
    }
        
  },
);

const seatModel = mongoos.model("seat", seatSchema);
// =========================================================

module.exports = seatModel;
