import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/Admin/Admin";
import UserManagementPage from "./components/Admin/UserManagementPAge.jsx";
import AdminProfile from "./components/Admin/AdminProfile.jsx";
import CustomerLayout from "./layouts/Customer.jsx";
import Dashboard from "./pages/Customer/Dashboard.jsx";
import Transactions from "./pages/Customer/Transactions.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/users" element={<UserManagementPage />} />
         <Route path="/profile" element={<AdminProfile />} />
        <Route path="/user" element={<CustomerLayout />} >
         <Route index element={<Dashboard />} />
         <Route path="transactions" element={<Transactions/>}/>               

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
