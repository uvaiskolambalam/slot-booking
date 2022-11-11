import React from 'react'
import './AdminLoginComponent.css'
import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function AdminLoginComponent() {
  const navigate=useNavigate()
  const onFinish= async(value)=>{

    try {
      const response = await axios.post("http://localhost:5000/api/admin/adminLogin", value)
      console.log(response,'adminnnnn');
      if(response.data.success){
        localStorage.setItem('token',response.data.data)
        navigate('/admin')  
      }
    } catch (error) {
      
    }
    console.log(value,'adminLoginValue');

  }
  return (
    <div className='loginContainer'>
      <div className="login">

      <div className="container">
        <h1>Admin Login</h1>
      <Form layout='vertical' onFinish={onFinish}>
          
          <Form.Item label='Email' name='email'>
            <Input placeholder='Email'/>
          </Form.Item>
          <Form.Item label='Password' name='password' >
            <Input placeholder='Password' type='password'/>
          </Form.Item>

          <Button className='primary-button  my-2' htmlType='submit'>LOGIN</Button>
          
        </Form>
      </div>

      </div>
    </div>
  )
}

export default AdminLoginComponent
