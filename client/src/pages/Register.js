import React from 'react'
import { Button, Form, Input } from 'antd'
import './Register.css'
import { Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../redux/alertSlice'
//import '../index.css'
function Register() {
  const navigate =useNavigate()
  const  dispatch=useDispatch()
  const onFinish = async(value)=>{
    try {
      dispatch(showLoading())
      const response = await axios.post("http://localhost:5000/api/user/register", value)
     dispatch(hideLoading())
     
      if (response.data.success){
        toast.success(response.data.message)
        toast("Redirection to login page")
        navigate('/login')
      }else{
        toast.success(response.data.message) 

      }

      
      
    } catch (error) {
      dispatch(hideLoading())
      toast.error('somthig went wrong')
      
    }
    console.log(value,'this is the value');
  }
  return (
    <div className='authentication'>
      <div className="authentication-form card p-3">
        <h1 className='card-title'>Signup Here</h1>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item label='Name' name='name'>
            <Input placeholder='Name'/>
          </Form.Item>
          <Form.Item label='Email' name='email'>
            <Input placeholder='Email'/>
          </Form.Item>
          <Form.Item label='Password' name='password' >
            <Input placeholder='Password' type='password'/>
          </Form.Item>

          <Button className='primary-button my-2' htmlType='submit'>REGISTER</Button>
          <Link className='anchor' to='/login'>Login</Link>
        </Form>
      </div>
      
    </div>
  )
}

export default Register
