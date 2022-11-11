import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../redux/alertSlice'
//const UserContext=React.createContext()
const UserContext=React.createContext()

function Home() {
  const  dispatch=useDispatch()
  const [user,setUser]=useState("")
  const [userStatus,setUserStatus]=useState({})
  console.log(user,'user');
  const getData=async()=>{
    try {
      dispatch(showLoading())
      const response=await axios.post('http://localhost:5000/api/user/get-user-info-by-id',{},
      {
        headers:{
          Authorization:'Bearer '+ localStorage.getItem('userToken')
        }
      })
      setUser(response.data.data)
      console.log(user)
      const bookigDetails=await axios.post('http://localhost:5000/api/user/bookingStatus',{},
      {
        headers:{
          Authorization:'Bearer '+ localStorage.getItem('userToken')
        }
      })
      if(bookigDetails.data){

        setUserStatus(bookigDetails.data)
      }
      dispatch(hideLoading())
     

    } catch (error) {
      dispatch(hideLoading())
      console.log(error)
      
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <UserContext.Provider value={{user,userStatus}}>

      <Layout>
      <h1>home page</h1>
    </Layout>
    </UserContext.Provider>
  )
}

export default Home
export{UserContext}
