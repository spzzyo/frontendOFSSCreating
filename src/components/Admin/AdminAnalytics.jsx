import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const analyticsData = {
  userGrowth: [
    { month: "Jan", users: 10 },
    { month: "Feb", users: 25 },
    { month: "Mar", users: 40 },
    { month: "Apr", users: 55 },
    { month: "May", users: 70 },
    { month: "Jun", users: 85 },
  ],
  revenueTrend: [
    { month: "Jan", revenue: 20000 },
    { month: "Feb", revenue: 35000 },
    { month: "Mar", revenue: 50000 },
    { month: "Apr", revenue: 65000 },
    { month: "May", revenue: 80000 },
    { month: "Jun", revenue: 100000 },
  ],
  approvalStatus: [
    { name: "Approved", value: 40 },
    { name: "Pending", value: 15 },
    { name: "Rejected", value: 5 },
  ],
  cardDistribution: [
    { name: "Gold", value: 50 },
    { name: "Titanium", value: 35 },
  ],
};

const COLORS = ["#10B981", "#FBBF24", "#EF4444"]; // emerald, yellow, red
const CARD_COLORS = ["#10B981", "#6366F1"]; // emerald, indigo

const AnalyticsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
     
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-lg font-semibold mb-4">User Growth</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={analyticsData.userGrowth}>
            <CartesianGrid stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#10B981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

   
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-lg font-semibold mb-4">Revenue Trend</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={analyticsData.revenueTrend}>
            <CartesianGrid stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

    
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-lg font-semibold mb-4">Approval Status</h2>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={analyticsData.approvalStatus}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#10B981"
              label
            >
              {analyticsData.approvalStatus.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>


      <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-lg font-semibold mb-4">Card Distribution</h2>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={analyticsData.cardDistribution}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#10B981"
              label
            >
              {analyticsData.cardDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={CARD_COLORS[index % CARD_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsSection;
