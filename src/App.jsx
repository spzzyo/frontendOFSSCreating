import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/Admin/Admin";
import UserManagementPage from "./components/Admin/UserManagementPAge.jsx";
import AdminProfile from "./components/Admin/AdminProfile.jsx";
import CustomerLayout from "./layouts/Customer.jsx";
import Dashboard from "./pages/Customer/Dashboard.jsx";
import Transactions from "./pages/Customer/Transactions.jsx";
import UserProfile from "./components/Admin/UserProfile.jsx";
import SubAdmin from "./components/Admin/SubAdminDetails.jsx";
import Login from "./pages/Auth/Login.jsx";
import Signup from "./pages/Auth/Signup.jsx";
import JoiningFee from "./pages/Auth/JoiningFee.jsx";

import HomePage from "./pages/Landing.jsx";
import PaymentsAutoPay from "./pages/Customer/Payments.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/joiningfee" element={<JoiningFee />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserManagementPage />} />
         <Route path="/profile" element={<AdminProfile />} />
        <Route path="/user" element={<CustomerLayout />} >
         <Route index element={<Dashboard />} />
         <Route path="/user/transactions" element={<Transactions/>}/>   
          <Route path="/user/payments" element={<PaymentsAutoPay/>}/>    
 


        </Route>
         <Route path="/usersProfile" element={<UserProfile />} />
         <Route path="/SubAdmin" element={<SubAdmin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
