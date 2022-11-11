import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar'
import './AdminApplication.css'



function AdminApplications() {
  const navigate=useNavigate()
  const reject=async(id)=>{
    const reject=await axios.get(`http://localhost:5000/api/admin/rejectStatus/${id}`,{
      headers:{
        Authorization:'Bearer '+ localStorage.getItem('token') 
      }
    })
    navigate('/admin/rejectd')
  }
  const statusChange=async(id)=>{
    console.log(id,'id');
    const status=await axios.get(`http://localhost:5000/api/admin/changeStatus/${id}`,{
      headers:{
        Authorization:'Bearer '+ localStorage.getItem('token') 
      }
      
    })
    //console.log(status.data.success,'sss');
    navigate('/admin/approvedData')
  }



    const [applications,setApplications]=useState([])

    const getApplicationData=async()=>{
        const response=await axios.post('http://localhost:5000/api/admin/getApplicationData',{},{
            headers:{
                Authorization:'Bearer '+ localStorage.getItem('token')
              }

        })
        setApplications(response.data.applicationData)   
        console.log(applications,'users'); 
    }

    useEffect(()=>{
        getApplicationData()
      },[])
  return (
    <div>
        <div>
        <AdminNavbar />
      </div>
      <div className="uesrlis">
        <h1>Applicaton</h1>
        
        <div className="tableDiv">
   
          <table class="table">
            <thead> 
              <tr>
                <th scope="col">Sl.No</th>
                <th scope="col">Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              
                {applications.map((obj,index)=>(
                    <tr>
                    
                    <td>{index+1}</td>
                    <td>{obj.name}</td>
                    <td>{obj.mobile}</td>
                    <td>{obj.staus}</td>
                    <td>
                      {
                        obj.staus=='pending' && <button onClick={()=>statusChange(obj._id)} className='btn btn-success me-3'>Approve</button>
                      }
                      {
                        obj.staus=='Rejected' && <button onClick={()=>statusChange(obj._id)} className='btn btn-success me-3'>Approve</button> 
                       
                      }
                      {
                        obj.staus=='Approved'&&   <Link to='/admin/approvedData'><button  className='btn btn-success me-3'>View</button></Link>
                      }
                      {
                        obj.completed && <Link to='/admin/approvedData'><button  className='btn btn-success me-3'>View</button></Link>
                      }
                      {
                        obj.completed ? <button disabled className='btn btn-danger '>{obj.staus=='Rejected'?'View':"Reject"}</button>:
                        <button onClick={()=>reject(obj._id)} className='btn btn-danger '>{obj.staus=='Rejected'?'View':"Reject"}</button>
                      }
                        
                        
                        
                    </td>
                  </tr>

                ))}
              
              
            </tbody>
          </table>
        </div>
      </div>
  
    </div>
  )
}

export default AdminApplications
