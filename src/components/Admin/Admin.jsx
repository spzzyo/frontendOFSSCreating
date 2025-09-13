import React from "react";
import AnalyticsSection from "./AdminAnalytics";

import {
  Users,
  Clock,
  CreditCard,
  DollarSign,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  UserCheck,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const statsData = [
    { title: "Total Users", value: "120", icon: Users, change: "+12%" },
    { title: "Pending Approvals", value: "15", icon: Clock, change: "-5%" },
    {
      title: "Active Cards",
      value: "85",
      subtitle: "Gold: 50, Titanium: 35",
      icon: CreditCard,
      change: "+8%",
    },
    { title: "Monthly Revenue", value: "₹1,25,000", icon: DollarSign, change: "+23%" },
  ];

  const userData = [
    { id: "U001", name: "Rajesh Kumar", email: "rajesh@example.com", status: "Active", cardType: "Gold" },
    { id: "U002", name: "Priya Sharma", email: "priya@example.com", status: "Pending", cardType: "Titanium" },
    { id: "U003", name: "Amit Singh", email: "amit@example.com", status: "Active", cardType: "Gold" },
    { id: "U004", name: "Sneha Patel", email: "sneha@example.com", status: "Rejected", cardType: "-" },
    { id: "U005", name: "Vikram Joshi", email: "vikram@example.com", status: "Active", cardType: "Titanium" },
    { id: "U006", name: "Kavya Reddy", email: "kavya@example.com", status: "Pending", cardType: "Gold" },
  ];

  const transactionData = [
    { id: "T001", user: "Rajesh Kumar", product: "Gold Card Fee", amount: "₹2,500", status: "Paid" },
    { id: "T002", user: "Priya Sharma", product: "Titanium Card Fee", amount: "₹5,000", status: "Pending" },
    { id: "T003", user: "Amit Singh", product: "Gold Card Fee", amount: "₹2,500", status: "Paid" },
    { id: "T004", user: "Vikram Joshi", product: "Titanium Card Fee", amount: "₹5,000", status: "Paid" },
    { id: "T005", user: "Kavya Reddy", product: "Gold Card Fee", amount: "₹2,500", status: "Pending" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
      case "Paid":
        return "bg-emerald-500 text-white";
      case "Pending":
        return "bg-yellow-500 text-black";
      case "Rejected":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Active":
      case "Paid":
        return CheckCircle;
      case "Pending":
        return AlertCircle;
      case "Rejected":
        return XCircle;
      default:
        return AlertCircle;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Admin Dashboard</h1>
         <button
        onClick={() => navigate("/profile")}
        className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-500 font-bold text-black shadow-lg hover:scale-110 transition-transform"
      >
        A
      </button>
          
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {statsData.map((stat, i) => {
    const Icon = stat.icon;
    return (
      <div
        key={i}
        className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
      >
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400">{stat.title}</p>
          <div className="bg-gray-700 p-2 rounded-full">
            <Icon className="h-5 w-5 text-emerald-400" />
          </div>
        </div>
        <h2 className="text-3xl font-bold mt-2">{stat.value}</h2>
        {stat.subtitle && <p className="text-xs text-gray-500">{stat.subtitle}</p>}
        <p
          className={`text-xs mt-1 ${
            stat.change.startsWith("-") ? "text-red-400" : "text-emerald-400"
          }`}
        >
          {stat.change} from last month
        </p>
      </div>
    );
  })}
</div>
<AnalyticsSection /> 




        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* <div className="bg-gray-900 p-6 rounded-xl shadow-lg backdrop-blur-sm bg-opacity-30 border border-gray-700">
            <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-700">
                <thead className="bg-gray-800 text-gray-300">
                  <tr>
                    <th className="px-3 py-2 text-left">Transaction ID</th>
                    <th className="px-3 py-2 text-left">User</th>
                    <th className="px-3 py-2 text-left">Product</th>
                    <th className="px-3 py-2 text-left">Amount</th>
                    <th className="px-3 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionData.map((t) => {
                    const StatusIcon = getStatusIcon(t.status);
                    return (
                      <tr key={t.id} className="border-t border-gray-700 hover:bg-gray-800 transition">
                        <td className="px-3 py-2 font-medium">{t.id}</td>
                        <td className="px-3 py-2">{t.user}</td>
                        <td className="px-3 py-2 text-gray-400">{t.product}</td>
                        <td className="px-3 py-2 font-semibold">{t.amount}</td>
                        <td className="px-3 py-2">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(
                              t.status
                            )}`}
                          >
                            <StatusIcon className="h-3 w-3" />
                            {t.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div> */}

          
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg backdrop-blur-sm bg-opacity-30 border border-gray-700">
            <h2 className="text-lg font-semibold mb-4">User Management</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-700">
                <thead className="bg-gray-800 text-gray-300">
                  <tr>
                    <th className="px-3 py-2 text-left">User ID</th>
                    <th className="px-3 py-2 text-left">Name</th>
                    <th className="px-3 py-2 text-left">Email</th>
                    <th className="px-3 py-2 text-left">Status</th>
                    <th className="px-3 py-2 text-left">Card Type</th>
                    <th className="px-3 py-2 text-left">Documents</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user) => {
                    const StatusIcon = getStatusIcon(user.status);
                    return (
                      <tr key={user.id} className="border-t border-gray-700 hover:bg-gray-800 transition">
                        <td className="px-3 py-2 font-medium">{user.id}</td>
                        <td className="px-3 py-2">{user.name}</td>
                        <td className="px-3 py-2 text-gray-400">{user.email}</td>
                        <td className="px-3 py-2">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(
                              user.status
                            )}`}
                          >
                            <StatusIcon className="h-3 w-3" />
                            {user.status}
                          </span>
                        </td>
                        <td className="px-3 py-2">{user.cardType}</td>
                        <td className="px-3 py-2"><button  onClick={() => navigate("/users/1")} className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-amber-500">Show Docs</button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* nbb */}
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg backdrop-blur-sm bg-opacity-30 border border-gray-700">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => navigate("/users")}
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white rounded-lg py-3 hover:bg-emerald-700 shadow-lg transform hover:scale-105 transition"
            >
              <UserCheck className="h-5 w-5" /> Verify Users
            </button>
            <button className="flex items-center justify-center gap-2 bg-emerald-600 text-white rounded-lg py-3 hover:bg-emerald-700 shadow-lg transform hover:scale-105 transition">
              <Eye className="h-5 w-5" /> Manage Products
            </button>
              
              <button
              onClick={() => navigate("/SubAdmin")}
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white rounded-lg py-3 hover:bg-emerald-700 shadow-lg transform hover:scale-105 transition"
            ><FileText className="h-5 w-5" /> Admin Management</button>

          </div>
        </div>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 py-6 mt-12">
        <p className="text-center text-gray-500">Online Finance</p>
      </footer>
    </div>
  );
};


export default AdminDashboard;
