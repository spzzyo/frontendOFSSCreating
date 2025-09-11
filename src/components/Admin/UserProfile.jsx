import React, { useState } from "react";
import { Eye } from "lucide-react";

const UserProfile = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  // Sample user details
  const user = {
    name: "John Doe",
    username: "johnd123",
    email: "john@example.com",
    phone: "+91 9876543210",
    address: "123 Street, Pune, India",
    cardType: "Gold",
    status: "Activated",
  };

  // Sample documents
  const documents = [
    { id: 1, name: "Aadhar Card", file: "aadhar-sample.pdf" },
    { id: 2, name: "PAN Card", file: "pan-sample.pdf" },
  ];

  // Sample EMI history
  const emiHistory = [
    { product: "iPhone 15", tenure: "6 Months", amount: "₹10,000", status: "Paid" },
    { product: "Laptop Dell XPS", tenure: "9 Months", amount: "₹8,500", status: "Pending" },
  ];

  // Sample transactions
  const transactions = [
    { date: "2025-08-20", product: "iPhone 15", paid: "₹10,000", balance: "₹50,000" },
    { date: "2025-09-01", product: "Laptop Dell XPS", paid: "₹8,500", balance: "₹68,000" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
      case "Activated":
        return "bg-emerald-500 text-white";
      case "Pending":
        return "bg-yellow-500 text-black";
      case "Rejected":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">User Profile</h1>
          <button
            className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-500 font-bold text-black shadow-lg hover:scale-110 transition-transform"
          >
            {user.name[0]}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* User Details */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-lg font-semibold mb-4 text-emerald-400">User Details</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Card Type:</strong> {user.cardType}</p>
            <p><strong>Status:</strong> {user.status}</p>
          </div>
        </div>

        {/* Documents */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-lg font-semibold mb-4 text-emerald-400">Submitted Documents</h2>
          <ul className="space-y-2 text-sm">
            {documents.map((doc) => (
              <li key={doc.id} className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span>{doc.name}</span>
                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs flex items-center gap-1 hover:bg-emerald-700"
                >
                  <Eye className="h-4 w-4" /> View
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* EMI History */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-lg font-semibold mb-4 text-emerald-400">EMI History</h2>
          <table className="w-full text-sm border border-gray-700">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th className="px-3 py-2 text-left">Product</th>
                <th className="px-3 py-2 text-left">Tenure</th>
                <th className="px-3 py-2 text-left">Amount</th>
                <th className="px-3 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {emiHistory.map((emi, i) => (
                <tr key={i} className="border-t border-gray-700 hover:bg-gray-800 transition">
                  <td className="px-3 py-2">{emi.product}</td>
                  <td className="px-3 py-2">{emi.tenure}</td>
                  <td className="px-3 py-2">{emi.amount}</td>
                  <td className="px-3 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(emi.status)}`}>
                      {emi.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Transactions */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-lg font-semibold mb-4 text-emerald-400">Recent Transactions</h2>
          <table className="w-full text-sm border border-gray-700">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th className="px-3 py-2 text-left">Date</th>
                <th className="px-3 py-2 text-left">Product</th>
                <th className="px-3 py-2 text-left">Paid</th>
                <th className="px-3 py-2 text-left">Remaining Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, i) => (
                <tr key={i} className="border-t border-gray-700 hover:bg-gray-800 transition">
                  <td className="px-3 py-2">{txn.date}</td>
                  <td className="px-3 py-2">{txn.product}</td>
                  <td className="px-3 py-2 font-semibold">{txn.paid}</td>
                  <td className="px-3 py-2">{txn.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Document Preview Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg w-96 border border-gray-700">
            <h3 className="text-lg font-bold mb-4 text-emerald-400">{selectedDoc.name}</h3>
            <p className="text-sm text-gray-400">Preview of: {selectedDoc.file}</p>
            <button
              className="mt-4 w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              onClick={() => setSelectedDoc(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <footer className="bg-gray-900 border-t border-gray-800 py-6 mt-12">
        <p className="text-center text-gray-500">Online Finance</p>
      </footer>
    </div>
  );
};

export default UserProfile;
