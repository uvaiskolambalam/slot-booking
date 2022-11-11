import React from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { Button, Form, Input } from 'antd'
import "./Booking.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import {useNavigate} from 'react-router-dom'
function Booking() {
    const navigate=useNavigate()

    const slotBooking =async(value)=>{
        try {
            const response=await axios.post("http://localhost:5000/api/user/booking",value,{
                headers:{
                    Authorization:'Bearer '+ localStorage.getItem('userToken')
                  }
            })
            if (response.data.success){
                toast.success(response.data.message)
                toast("Redirection to home page")
                navigate('/')
              }
            
            
            console.log(response.data,'clisen response');
        
        console.log(value,'slotvalue');
            
        } catch (error) {
            
        }
        
        

    }
  return (
    <Form layout='vertical' onFinish={slotBooking}>
      <div className="container p-5 main">
        <div className="row total">
          <h3 className="title">Book your seet </h3>
          <div className="col-6">
          <Form.Item label='Name' name='name'>
            <Input placeholder='Name'/>
          </Form.Item>
          <Form.Item label='Mobile' name='mobile'>
            <Input placeholder='Mobile'/>
          </Form.Item>
          <Form.Item label='City' name='city'>
            <Input placeholder='City'/>
          </Form.Item>
          <Form.Item label='State' name='state'>
            <Input placeholder='State'/>
          </Form.Item>

          
            {/* <Form.Label className="title">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name='name' /> */}
          </div>
          {/* <div className="col-6">
            <Form.Label className="title">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' />
          </div>
          <div className="col-6">
            <Form.Label className="title">Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" name='address' />
          </div>
          <div className="col-6">
            <Form.Label className="title">Phone</Form.Label>
            <Form.Control type="number" placeholder="Enter No" name='phone'/>
          </div>
          <div className="col-6">
            <Form.Label className="title">City</Form.Label>
            <Form.Control type="text" placeholder="Enter City" name='city'/>
          </div>
          <div className="col-6">
            <Form.Label className="title">State</Form.Label>
            <Form.Control type="text" placeholder="Enter State" name='state' />
          </div>
          <div className="col-6">
            <Form.Label className="title">Pin</Form.Label>
            <Form.Control type="number" placeholder="Enter Pin" name='pin' />
          </div> */}
          <div className=" col-6">
          <Form.Item label='Email' name='email'>
            <Input placeholder='Email'/>
          </Form.Item>
          <Form.Item label='Address' name='address'>
            <Input placeholder='Address'/>
          </Form.Item>
            
            <Form.Item label='Pin' name='pin'>
            <Input placeholder='Pin'/>
          </Form.Item>
          <Button className="submit-button primary-button" htmlType="submit">
              Submit
            </Button>
          </div>
        </div>

        {/* <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}
      </div>
    </Form>
  );
}

export default Booking;
