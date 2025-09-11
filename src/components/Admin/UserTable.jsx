import React, { useState } from "react";
import { CheckCircle, XCircle, AlertCircle, Eye, UserCheck, FileText } from "lucide-react";
import EditModal from "./EditUserModal";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { useNavigate } from "react-router-dom";

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

const UserTable = ({ users }) => {
  const navigate = useNavigate();

  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl">
      <h2 className="text-lg font-semibold mb-6 text-emerald-400">User Management</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-700 rounded-lg">
          <thead className="bg-gray-800 text-gray-300 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-4 py-3 text-left">User ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Card Type</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const StatusIcon = getStatusIcon(user.status);
              return (
                <tr
                  key={user.id}
                  className="border-t border-gray-700 hover:bg-gray-800 transition-transform transform hover:scale-[1.01]"
                >
                  <td className="px-4 py-3 font-medium">{user.id}</td>
                  <td className="px-4 py-3 flex items-center gap-2">
  <button 
    onClick={() => navigate('/usersProfile')} 
    className="flex items-center gap-2 text-white-400 hover:underline"
  >
    <div className="h-6 w-6 bg-gray-700 rounded-full flex items-center justify-center text-xs text-gray-300">
      {user.name[0]}
    </div>
    {user.name}
  </button>
</td>
                  <td className="px-4 py-3 text-gray-400">{user.email}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        user.status
                      )} shadow-sm`}
                    >
                      <StatusIcon className="h-3 w-3" />
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{user.cardType}</td>
                  <td className="px-4 py-3 flex gap-2">
                    <button
                      onClick={() => setEditUser(user)}
                      className="bg-emerald-600 hover:bg-emerald-700 px-3 py-1 rounded-lg text-white flex items-center gap-1 transition-shadow shadow-md hover:shadow-lg"
                    >
                      <Eye className="h-4 w-4" /> Edit
                    </button>
                    <button
                      onClick={() => setDeleteUser(user)}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg text-white flex items-center gap-1 transition-shadow shadow-md hover:shadow-lg"
                    >
                      <XCircle className="h-4 w-4" /> Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {editUser && <EditModal user={editUser} onClose={() => setEditUser(null)} />}
      {deleteUser && <DeleteConfirmModal user={deleteUser} onClose={() => setDeleteUser(null)} />}
    </div>
  );
};

export default UserTable;
