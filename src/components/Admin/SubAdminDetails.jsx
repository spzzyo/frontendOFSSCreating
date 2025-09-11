import React from "react";
import { User, UserCheck, Trash2, Clock, Shield, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuperAdminPanel = () => {
  const navigate = useNavigate();

  // Sample sub-admins data
  const subAdmins = [
    { id: "A001", name: "Ravi Sharma", email: "ravi@finance.com", role: "Sub Admin", status: "Active" },
    { id: "A002", name: "Sneha Patel", email: "sneha@finance.com", role: "Sub Admin", status: "Active" },
    { id: "A003", name: "Amit Singh", email: "amit@finance.com", role: "Sub Admin", status: "Inactive" },
  ];

  // Sample audit logs
  const auditLogs = [
    { id: 1, action: "Ravi Sharma approved User Rajesh Kumar", time: "2025-09-10 03:45 PM" },
    { id: 2, action: "Sneha Patel rejected User Priya Sharma", time: "2025-09-09 11:20 AM" },
    { id: 3, action: "Amit Singh deleted Product Titanium Card", time: "2025-09-09 09:10 AM" },
    { id: 4, action: "Ravi Sharma logged in", time: "2025-09-08 06:30 PM" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Super Admin Panel</h1>
          <button
            onClick={() => navigate("/profile")}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-500 font-bold text-black shadow-lg hover:scale-110 transition-transform"
          >
            S
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Sub Admins List */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Sub Admins Overview</h2>
            <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-3 py-2 rounded-lg shadow-md transition">
              <PlusCircle className="h-5 w-5" /> Add New Admin
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-700">
              <thead className="bg-gray-800 text-gray-300">
                <tr>
                  <th className="px-3 py-2 text-left">Admin ID</th>
                  <th className="px-3 py-2 text-left">Name</th>
                  <th className="px-3 py-2 text-left">Email</th>
                  <th className="px-3 py-2 text-left">Role</th>
                  <th className="px-3 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {subAdmins.map((admin) => (
                  <tr key={admin.id} className="border-t border-gray-700 hover:bg-gray-800 transition">
                    <td className="px-3 py-2 font-medium">{admin.id}</td>
                    <td className="px-3 py-2 flex items-center gap-2">
                      <User className="h-4 w-4 text-emerald-400" /> {admin.name}
                    </td>
                    <td className="px-3 py-2 text-gray-400">{admin.email}</td>
                    <td className="px-3 py-2">{admin.role}</td>
                    <td className="px-3 py-2">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                          admin.status === "Active" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
                        }`}
                      >
                        <Shield className="h-3 w-3" />
                        {admin.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Audit Logs */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-lg font-semibold mb-4">Audit Logs</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-700">
              <thead className="bg-gray-800 text-gray-300">
                <tr>
                  <th className="px-3 py-2 text-left">Log ID</th>
                  <th className="px-3 py-2 text-left">Action</th>
                  <th className="px-3 py-2 text-left">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {auditLogs.map((log) => (
                  <tr key={log.id} className="border-t border-gray-700 hover:bg-gray-800 transition">
                    <td className="px-3 py-2">{log.id}</td>
                    <td className="px-3 py-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-yellow-400" /> {log.action}
                    </td>
                    <td className="px-3 py-2 text-gray-400">{log.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 py-6 mt-12">
        <p className="text-center text-gray-500">Super Admin Control</p>
      </footer>
    </div>
  );
};

export default SuperAdminPanel;
