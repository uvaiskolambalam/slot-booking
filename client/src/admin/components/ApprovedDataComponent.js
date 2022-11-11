import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

function ApprovedDataComponent() {
    const [approvedDatas,setApprovedDatas]=useState([])
    const getApprovedData=async()=>{
        const approvedData=await axios.post('http://localhost:5000/api/admin/getApprovedData',{},{
            headers:{
                Authorization:'Bearer '+ localStorage.getItem('token')
              }

        })
        //console.log(approvedData.data.approveddatas,'approvedData.data');
        setApprovedDatas(approvedData.data.approveddatas)
       
        
    }

    useEffect(()=>{
        getApprovedData()
    },[])
  return (
    <div>
      <div>
        <div>
        <AdminNavbar />
      </div>
      <div className="uesrlist">
        <h1>Approved Datas</h1>
        
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
                {approvedDatas.map((obj,index)=>(
                    <tr> 
                    <td>{index+1}</td>
                    <td>{obj.name}</td>
                    <td>{obj.mobile}</td>
                    <td>{obj.staus}</td>
                    <td><Link to={`/admin/slotBooking/${obj._id}`}><button className='btn btn-primary'>Book Slot</button></Link></td>
                  </tr>

                ))}
               
                    

               
              
              
            </tbody>
          </table>
        </div>
      </div>
      Applications
    </div>
    </div>
  )
}

export default ApprovedDataComponent
