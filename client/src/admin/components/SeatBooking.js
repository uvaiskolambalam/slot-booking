import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import {useParams} from 'react-router-dom'
import './SeatBook.css'

function SeatBooking() {
  const id=useParams()
  //console.log(id,'lllll');
  
  const [user,setUser]=useState()
  const seatBooking=async(e)=>{
    
    const seatId=e.target.value
    const slots=await axios.post('http://localhost:5000/api/admin/sloteBooking',{id,seatId},{
      headers:{
          Authorization:'Bearer '+ localStorage.getItem('token')
        }


        
      })
      getSeats()

   
  
    
   
 

  }




  const [seats, setSeats] = useState([]);
  const getSeats = async () => {
    const seat = await axios.post(
      "http://localhost:5000/api/admin/getSeats",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    setSeats(seat.data.seat);
    console.log(seats, "seatsssssssssss");
  };
  console.log(seats, "seatsssssssssss");
  useEffect(() => {
    getSeats();
  }, []);

  return (
    <div>
     
        <AdminNavbar/>
    
      <div className="bg-dark top">
      <div className="container slote-top">
        <div className="row ">
          <div className="col-md-12">

            {seats.map((obj, index) => (
                  
                    obj.disabled ? <button key={index}  disabled value={obj.seatNo} className="btn btn-success m-3">{obj.applicant}</button>:
                    <button key={index} onClick={seatBooking} value={obj.seatNo} className="btn btn-primary m-3">{obj.seatNo}</button>   
            
                )) }
          </div>  
        </div>
      </div>
    </div>
    </div>
  
  );
}

export default SeatBooking;
