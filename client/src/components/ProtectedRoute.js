import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import { setUser } from '../redux/userSlice'
import { hideLoading, showLoading } from '../redux/alertSlice'


function ProtectedRoute(props) {
   
const {user} =useSelector((state)=>state.user)
const dispatch=useDispatch()
const navigate=useNavigate()
const getUser=async()=>{
    try {
        dispatch(showLoading())
        const response=await axios.post('/api/user/get-user-info-by-id',{token: localStorage.getItem('token')},{
            headers:{
                Authorization:`Bearer${localStorage.getItem("userToken")}`
            }
        })
        dispatch(hideLoading())
        console.log('response');
        if(response.data.success){
            dispatch(setUser(response.data.data))
        }else{
            navigate('/login')
        }
    } catch (error) {
        dispatch(hideLoading())
        navigate('/login')

        
    }

}

    useEffect(()=>{
        if(user){
            getUser()
        }
    },[user])

    if (localStorage.getItem('userToken')){
        return props.children
    }else{
        return <Navigate to='/login'/>
    }
   
}

export default ProtectedRoute
