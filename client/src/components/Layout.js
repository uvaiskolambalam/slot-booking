import React, { useState ,useContext } from "react";
import "./Layout.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
//import { useSelector } from "react-redux";
import {UserContext} from '../pages/Home'
import Animation from './homegif.gif'



function Layout() {
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.removeItem('userToken')
    navigate('/login')
  }
  
 
const user=useContext(UserContext)
console.log(user,'hahah');
const register=user.userStatus.registerd
console.log(register,'my');
  //const menuToBeRenderd = userMenu;
  return (
   
    <div className="body bg-danger d-flex align-items-center ">
        <div className="container ">
          <div className="row">
            <div className="col-12 d-flex justify-content-spacebetween d-flex align-items-center ">
                <div className="col-md-6 col-sm-12">
                    <h1>Hai {user.user.name} </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Ratione deleniti odio explicabo quae molestias quasi, <br/> saepe cumque eum perspiciatis repellendus </p>
                    <div className="d-flex me-3">
                        {register ? <Link to='/status'><button className="btn btn-warning me-3">Status</button></Link> :<Link to='/booking'><button className="btn btn-warning me-3">Book Now</button></Link>}
                        <button className="btn btn-light" onClick={logout}> Logout</button>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="imageCont">
                    <img src={Animation} alt="" />
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Layout;
