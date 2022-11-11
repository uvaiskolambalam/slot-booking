import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import './AdminUserList.css'


function AdminUserList() {
    const [users,setUser]=useState([])
    const getData=async()=>{

        const response=await axios.post('http://localhost:5000/api/admin/getUserData',{},{
            headers:{
                Authorization:'Bearer '+ localStorage.getItem('token')
              }
        })
        setUser(response.data.userData)   
        console.log(users,'users'); 
        
    }
    
    useEffect(()=>{
        getData()
      },[])
  return (
    <div>
      <div>
        <AdminNavbar />
      </div>
      <div className="uesrlist">
        <div className="headerName">
        <h1>Users</h1>
        </div>
        <div className="container  tableDiv">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sl.No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
            
              </tr>
            </thead>
            <tbody>
                {users.map((obj,index)=>(
                    <tr>
                    <td>{index+1}</td>
                    <td>{obj.name}</td>
                    <td>{obj.email}</td>
                  
                  </tr>

                ))}
              
              
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminUserList;
