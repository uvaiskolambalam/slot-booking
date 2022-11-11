import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

function RejectedDataComponent(){
    const [rejectedData,setRejectedData]=useState([])
    const getRegectedData=async()=>{
        const rejecteddData=await axios.post('http://localhost:5000/api/admin/getRejectedData',{},{
            headers:{
                Authorization:'Bearer '+ localStorage.getItem('token')
              }

        })
        setRejectedData(rejecteddData.data.rejectedDatas)
    }
    useEffect(()=>{
        getRegectedData()
    },[])

  return (
    <div>
        <div>
        <AdminNavbar />
      </div>
      <div className="uesrlist">
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
              
                {rejectedData.map((obj,index)=>(
                    <tr>
                    
                    <td>{index+1}</td>
                    <td>{obj.name}</td>
                    <td>{obj.mobile}</td>
                    <td>{obj.staus}</td>
                    <td><Link to='/admin'><button className='btn btn-primary'>Home</button></Link></td>
                  </tr>

                ))}
              
              
            </tbody>
          </table>
        </div>
      </div>
      Applications
    </div>
  )
}

export default RejectedDataComponent
