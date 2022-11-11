
const express = require("express");
const router = express.Router();
const jwt=require('jsonwebtoken')
const User = require("../models/userModel");
const Slot = require("../models/userSlotBooking");
const adminMiddleware=require('../middlewares/adminMiddleWare')
const Seat =require('../models/seates')



router.post('/adminLogin',(req,res)=>{
    
    const adminData={
        email:"admin@gmail.com",
        password:123456
    }
    console.log(req.body,'adminLoinData');
    if(req.body.email==adminData.email){
        if(req.body.password==adminData.password){
            const token=jwt.sign({id:123},process.env.JWT_SECRET,{expiresIn:"1d",})
            console.log(token);
           return res.status(200).send({ message: "Login success", success: true, data:token });
        }
    }
})

router.post('/getUserData',adminMiddleware, async(req,res)=>{
    try {
        const userData=await User.find({})
        console.log(userData,'jj');

        res.status(200).send({message:'Users Here', success:true,userData})

    } catch (error) {
        
    }
})
router.post('/getApplicationData',adminMiddleware,async(req,res)=>{
    try {
        const applicationData=await Slot.find({})
        res.status(200).send({message:'applications',success:true,applicationData})
    } catch (error) {
        
    }
})

router.get('/changeStatus/:id',adminMiddleware,async(req,res)=>{
    try {
        console.log(req.params.id); 
        let id=req.params.id
        const status=await Slot.updateOne({_id:id},{$set:{staus:'Approved'}})
        res.status(200).send({message:'hello',success:true,status})
    } catch (error) {
        
    }

})

router.post('/getApprovedData',adminMiddleware,async(req,res)=>{
    try {
        const approveddatas=await Slot.find({staus:'Approved'})
        //console.log(approveddatas,'approveddatas');
        res.status(200).send({message:'approved Deatis',success:true,approveddatas})
    } catch (error) {
        
    }
})

router.get('/rejectStatus/:id',adminMiddleware,async(req,res)=>{
    try {
        
        let id=req.params.id
        const rejectedDatas=await Slot.updateOne({_id:id},{$set:{staus:'Rejected'}})
        res.status(200).send({message:"rejected",success:true,rejectedDatas})
    } catch (error) {
        
    }
})

router.post('/getRejectedData',adminMiddleware,async(req,res)=>{
    try {
       
        const rejectedDatas=await Slot.find({staus:'Rejected'})
        //console.log(approveddatas,'approveddatas');
        res.status(200).send({message:'approved Deatis',success:true,rejectedDatas})
    } catch (error) {
        
    }
})

router.post('/getSeats',adminMiddleware, async(req,res)=>{
    try {
       const seat= await Seat.find({})

         
            res.status(200).send({message:'this is avilable seats',success:true,seat})
        
    } catch (error) {
        
    }
})

router.post('/sloteBooking',adminMiddleware,async(req,res)=>{
   try {
       console.log(req.body,'ssssssssssssssssssss');
    const ID=req.body.id.id
    const userName=await Slot.findOne({_id:ID})
    const isUser=await Seat.findOne({registerId:ID})
    console.log('jjjjj'); 
    console.log(isUser);
    if(!isUser){
        console.log('dsffffffffffff'); 
        const seatUpdate=await Seat.updateOne({seatNo:req.body.seatId},{$set:{
            applicant:userName.name,
            disabled:true,
            registerId:ID
        }})
        const slotUpdate=await Slot.updateOne({_id:ID},{$set:{
            staus:`Your Application updated at seat no:${req.body.seatId}`,
            completed:true
        }})
        //console.log(dataUpdate,'dataupdate');
        res.status(200).send({message:'successfull updated',success:true,seatUpdate})
    }else{
        res.status(200).send({message:'updaton failed',success:false})

    }

    
   } catch (error) {
    
   }


})



module.exports = router;