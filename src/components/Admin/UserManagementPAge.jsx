import React from "react";
import { Users, Clock, CreditCard, DollarSign } from "lucide-react";
import StatsCard from "./StatsCard";
import UserTable from "./UserTable";

const UserManagementPage = () => {
  const statsData = [
    { title: "Total Users", value: "120", Icon: Users, change: "+12%" },
    { title: "Pending Approvals", value: "15", Icon: Clock, change: "-5%" },
    { title: "Active Cards", value: "85", Icon: CreditCard, change: "+8%" },
    { title: "Monthly Revenue", value: "₹1,25,000", Icon: DollarSign, change: "+23%" },
  ];

  const userData = [
    { id: "U001", name: "Rajesh Kumar", email: "rajesh@example.com", status: "Active", cardType: "Gold" },
    { id: "U002", name: "Priya Sharma", email: "priya@example.com", status: "Pending", cardType: "Titanium" },
    { id: "U003", name: "Amit Singh", email: "amit@example.com", status: "Active", cardType: "Gold" },
    { id: "U004", name: "Sneha Patel", email: "sneha@example.com", status: "Rejected", cardType: "-" },
    { id: "U005", name: "Vikram Joshi", email: "vikram@example.com", status: "Active", cardType: "Titanium" },
    { id: "U006", name: "Kavya Reddy", email: "kavya@example.com", status: "Pending", cardType: "Gold" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900 shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">User Management</h1>
          <button className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-500 font-bold text-black">
            A
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, i) => (
            <StatsCard
              key={i}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              Icon={stat.Icon}
            />
          ))}
        </div>


        <UserTable users={userData} />
      </main>


      <footer className="bg-gray-900 border-t border-gray-800 py-6 mt-12">
        <p className="text-center text-gray-500">
          Online Finance
        </p>
      </footer>
    </div>
  );
};

export default UserManagementPage;
