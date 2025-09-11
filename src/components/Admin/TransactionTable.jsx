import React from "react";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

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

const TransactionTable = ({ transactions }) => (
  <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
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
          {transactions.map((t) => {
            const StatusIcon = getStatusIcon(t.status);
            return (
              <tr key={t.id} className="border-t border-gray-700 hover:bg-gray-800">
                <td className="px-3 py-2 font-medium">{t.id}</td>
                <td className="px-3 py-2">{t.user}</td>
                <td className="px-3 py-2 text-gray-400">{t.product}</td>
                <td className="px-3 py-2 font-semibold">{t.amount}</td>
                <td className="px-3 py-2">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(t.status)}`}>
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
  </div>
);

export default TransactionTable;
