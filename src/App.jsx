import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/Admin/Admin";
import UserManagementPage from "./components/Admin/UserManagementPAge.jsx";
import AdminProfile from "./components/Admin/AdminProfile.jsx";
import Login from './components/UserAuth/Login';
import Signup from './components/UserAuth/Signup';
import JoiningFee from "./components/UserAuth/JoiningFee.jsx";
import SavingsCalculator from "./components/SavingsCalculator/SavingsCalculator.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/users" element={<UserManagementPage />} />
         <Route path="/profile" element={<AdminProfile />} /> 
        <Route path="/calculator" element={<SavingsCalculator/>} />
        <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/joiningfee" element={<JoiningFee/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
