import React from 'react'
import { Link } from 'react-router-dom'
import './adminNavbar.css'



function AdminNavbar() {
  return (
    <div>
        <div className='navBody'>
            <div className="navList">
                <ul>
                    <Link to='/admin'><li>Home</li></Link>
                    <Link to='/admin/users'><li>Users</li></Link>
                    <Link to='/admin/applications'><li>Applications</li></Link>
                    
                </ul>
            </div>

        </div>
      
    </div>
  )
}

export default AdminNavbar
