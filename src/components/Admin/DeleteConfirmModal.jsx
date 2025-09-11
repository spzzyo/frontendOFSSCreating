import React from "react";

const DeleteConfirmModal = ({ user, onClose }) => {
  const handleDelete = () => {
    console.log("Deleted user:", user.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-80 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
        <p className="text-gray-300 mb-4">Are you sure you want to delete <span className="font-bold">{user.name}</span>?</p>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 text-white">Cancel</button>
          <button onClick={handleDelete} className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;

