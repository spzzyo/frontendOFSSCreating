import React from "react";
import { User, Mail, Phone, Shield, Lock, Sun, Moon, Activity } from "lucide-react";

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
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex items-center justify-between shadow-lg mb-8">
        <div className="flex items-center gap-6">
          <img
            src={admin.avatar}
            alt="Admin Avatar"
            className="w-24 h-24 rounded-full border-4 border-purple-500 shadow-lg"
          />
          <div>
            <h1 className="text-2xl font-bold">{admin.name}</h1>
            <p className="text-purple-400">{admin.role}</p>
            <p className="text-sm text-gray-400">Joined: {admin.joined}</p>
          </div>
        </div>
        <button className="px-6 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all shadow-md">
          Edit Profile
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-purple-400" /> Personal Information
          </h2>
          <div className="space-y-3 text-gray-300">
            <p><Mail className="w-4 h-4 inline mr-2 text-purple-400" /> {admin.email}</p>
            <p><Phone className="w-4 h-4 inline mr-2 text-purple-400" /> {admin.phone}</p>
            <p><Activity className="w-4 h-4 inline mr-2 text-purple-400" /> Last Login: {admin.lastLogin}</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-400" /> Security Settings
          </h2>
          <div className="space-y-4">
            <button className="w-full px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" /> Change Password
            </button>
            <button className="w-full px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all flex items-center justify-center gap-2">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Sun className="w-5 h-5 text-purple-400" /> Preferences
        </h2>
        <div className="flex items-center gap-6">
          <button className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all flex items-center gap-2">
            <Sun className="w-4 h-4 text-yellow-400" /> Light Mode
          </button>
          <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all flex items-center gap-2">
            <Moon className="w-4 h-4" /> Dark Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
