import React from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./components/Booking";
import Status from "./components/UserStatus";
import AdminLogin from "./admin/pages/AdminLogin";
import AdminRoute from './admin/adminRoute/AdminRoute'
import AdminHome from './admin/pages/AdminHome'
import AdminUserList from "./admin/components/AdminUserList";
import AdminApplications from "./admin/components/AdminApplications";
import ApprovedData from "./admin/pages/ApprovedData";
import RejectedData from "./admin/pages/RejectedData";
import SlotBooking from "./admin/pages/SlotBooking";
import AdminPublicRouter from './components/AdminPublicRouter'

function App() {
  const {loading}=useSelector((state)=>state.alerts)
  return (
    <div>
      <BrowserRouter>
        {loading && (
        <div className="spinner-parent">
          <div class="spinner-border" role="status"></div>
        </div>
        )}
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
          <Route path="/status" element={<ProtectedRoute><Status /></ProtectedRoute>} />
          <Route path='/admin' element={<AdminProtectedRoute><AdminHome/></AdminProtectedRoute>}/>
          <Route path='/admin/users' element={<AdminProtectedRoute><AdminUserList/></AdminProtectedRoute>}/>
          <Route path='/admin/applications' element={<AdminProtectedRoute><AdminApplications/></AdminProtectedRoute>}/>
          <Route path='/admin/pendingApplications' element={<AdminProtectedRoute><AdminApplications/></AdminProtectedRoute>}/>
          <Route path='/admin/approvedData' element={<AdminProtectedRoute><ApprovedData/></AdminProtectedRoute>}/>
          <Route path='/admin/slotBooking/:id' element={<AdminProtectedRoute><SlotBooking/></AdminProtectedRoute>}/>
          <Route path='/admin/rejectd' element={<AdminProtectedRoute><RejectedData/></AdminProtectedRoute>}/>
          <Route path='/adminLogin' element={<AdminPublicRouter><AdminLogin/></AdminPublicRouter>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
