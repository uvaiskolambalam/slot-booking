import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './UserStatus.css'
import { hideLoading, showLoading } from '../redux/alertSlice'

function UserStatus () {
  const [userStatus,setUserStatus]=useState({})
  const  dispatch=useDispatch()
  const getData=async()=>{
    try {
      dispatch(showLoading())
      const bookigDetails=await axios.post('http://localhost:5000/api/user/bookingStatus',{},
      {
        headers:{
          Authorization:'Bearer '+ localStorage.getItem('userToken')
        }
      })
      dispatch(hideLoading())
      if(bookigDetails.data){
        
        setUserStatus(bookigDetails.data)
      }
      

      console.log(userStatus,'stttttt')
      

    } catch (error) {
      dispatch(hideLoading())
      console.log(error)
       
    }
  }

      useEffect(()=>{ 
        getData()
      },[])
  return (
    <div>
      <div className="status">
        <div className="statusDetails">
          <p>Hello <span className='text-warning'>{userStatus.name}</span></p>
          <p>Status:<strong className='text-warning'>{userStatus.staus}</strong></p>
          <Link to='/'><button className='btn btn-warning'>Home</button></Link>
   
        </div>
     
      </div>
    </div>
  )
}

export default UserStatus
