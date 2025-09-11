import React, { useState } from "react";
import { X, Check } from "lucide-react";

const EditModal = ({ user, onClose }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [status, setStatus] = useState(user.status);

  const handleSave = () => {
    console.log("Saved user:", { id: user.id, name, email, status });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-2xl w-96 shadow-2xl transform transition-all scale-95 animate-fade-in">
        <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
          <h2 className="text-xl font-bold text-emerald-400">Edit User</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-700 transition"
          >
            <X className="h-5 w-5 text-gray-300" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <input
            className="bg-gray-800 text-white p-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            className="bg-gray-800 text-white p-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <select
            className="bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium transition"
          >
            <X className="h-4 w-4" /> Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition"
          >
            <Check className="h-4 w-4" /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
