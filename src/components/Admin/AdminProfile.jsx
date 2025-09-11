import React from "react";
import { User, Mail, Phone, Lock, Activity } from "lucide-react";

const AdminProfile = () => {
  const admin = {
    name: "Mahesh Thakare",
    role: "Super Admin",
    email: "mahesh.admin@example.com",
    phone: "+91 98765 43210",
    joined: "Jan 12, 2024",
    lastLogin: "Sept 10, 2025 - 08:45 AM",
    avatar: "https://i.pravatar.cc/150?img=12",
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header Card */}
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-between shadow-lg mb-8 border border-gray-700">
        <div className="flex items-center gap-6">
          <img
            src={admin.avatar}
            alt="Admin Avatar"
            className="w-24 h-24 rounded-full border-4 border-emerald-500 shadow-lg"
          />
          <div>
            <h1 className="text-2xl font-bold">{admin.name}</h1>
            <p className="text-emerald-400">{admin.role}</p>
            <p className="text-sm text-gray-400">Joined: {admin.joined}</p>
            <p className="text-sm text-gray-400">Last Login: {admin.lastLogin}</p>
          </div>
        </div>
        <button className="px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md">
          Edit Profile
        </button>
      </div>

      {/* Personal & Security Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Personal Information */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-emerald-400" /> Personal Information
          </h2>
          <div className="space-y-3 text-gray-300">
            <p>
              <Mail className="w-4 h-4 inline mr-2 text-emerald-400" /> {admin.email}
            </p>
            <p>
              <Phone className="w-4 h-4 inline mr-2 text-emerald-400" /> {admin.phone}
            </p>
            <p>
              <Activity className="w-4 h-4 inline mr-2 text-emerald-400" /> Last Login: {admin.lastLogin}
            </p>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-400" /> Security Settings
          </h2>
          <div className="space-y-4">
            <button className="w-full px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" /> Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
