import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/Admin/Admin";
import UserManagementPage from "./components/Admin/UserManagementPAge.jsx";
import AdminProfile from "./components/Admin/AdminProfile.jsx";
import UserProfile from "./components/Admin/UserProfile.jsx";
import SubAdmin from "./components/Admin/SubAdminDetails.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/users" element={<UserManagementPage />} />
         <Route path="/profile" element={<AdminProfile />} />
         <Route path="/usersProfile" element={<UserProfile />} />
         <Route path="/SubAdmin" element={<SubAdmin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
