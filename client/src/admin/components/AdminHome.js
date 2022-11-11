import React from 'react'
import './AdminHome.css'
import AdminNavbar from './AdminNavbar'
import Animation from '../../components/admin.gif'
import { useNavigate } from 'react-router-dom'

function AdminHome() {
    const navigate=useNavigate()
    const adminLogout=()=>{
        localStorage.removeItem('token')
        navigate('/adminLogin')
        
    }
  return (
    <div>
            <div className="row">
                <AdminNavbar/>
            </div>
        <div className='adminHomeBody'>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="left">
                        <h1>Welcome</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio eligendi veritatis adipisci, nulla minus amet possimus ex praesentium est illum nemo nisi iusto earum necessitatibus soluta! Doloribus, qui vero.</p>
                        <button className='btn btn-danger' onClick={adminLogout}>Logout</button>
                    </div>

                </div>
                <div className="col-6">
                    <div className="right">
                    <img src={Animation} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="adminHomeMain">
            hello

        </div>
      
    </div>
    </div>
  )
}

export default AdminHome
