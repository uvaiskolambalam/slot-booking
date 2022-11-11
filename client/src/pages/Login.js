import React from 'react'
import { Button, Form, Input } from 'antd'
import './Login.css'
import { useSelector,useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios' 
import { hideLoading, showLoading } from '../redux/alertSlice'
//import { useSelector } from 'react-redux'
//import '../index.css'
function Login() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const onFinish=async(value)=>{
    try {
      dispatch(showLoading())
     // console.log(value,'iiiiiiddddd');
      const response = await axios.post("http://localhost:5000/api/user/login", value)
     dispatch(hideLoading())
      if (response.data.success){
        toast.success(response.data.message)
        toast("Redirection to home page")
        localStorage.setItem('userToken',response.data.data)
        navigate('/')
      }else{
        toast.success(response.data.message) 

      }

      
      
    } catch (error) {
      dispatch(hideLoading())
      toast.error('somthig went wrong')
      
    }
  }
  return (
    <div className='authentication'>
      <div className="authentication-form card p-3">
        <h1 className='card-title'>Login Here</h1>
        <Form layout='vertical' onFinish={onFinish}>
          
          <Form.Item label='Email' name='email'>
            <Input placeholder='Email'/>
          </Form.Item>
          <Form.Item label='Password' name='password' >
            <Input placeholder='Password' type='password'/>
          </Form.Item>

          <Button className='primary-button my-2' htmlType='submit'>Login</Button>
          <Link className='anchor' to='/Register'>Signup</Link>
        </Form>
      </div>
      
    </div>
  )
}

export default Login
