// import React from "react";

// const StatsCard = ({ title, value, subtitle, change, Icon }) => {
//   return (
//     <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
//       <div className="flex justify-between items-center">
//         <p className="text-sm text-gray-400">{title}</p>
//         {Icon && <Icon className="h-5 w-5 text-emerald-400" />}
//       </div>
//       <h2 className="text-3xl font-bold mt-2">{value}</h2>
//       {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
//       <p className={`${change.startsWith("-") ? "text-red-400" : "text-emerald-400"} text-xs mt-1`}>
//         {change} from last month
//       </p>
//     </div>
//   );
// };

// export default StatsCard;

import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const StatsCard = ({ title, value, subtitle, change, Icon }) => {
  const isNegative = change.startsWith("-");

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl hover:shadow-emerald-600 transition-transform transform hover:scale-105">
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-gray-400 uppercase tracking-wider">{title}</p>
        {Icon && (
          <div className="bg-gray-800 p-2 rounded-full shadow-inner">
            <Icon className="h-6 w-6 text-emerald-400" />
          </div>
        )}
      </div>
      <h2 className="text-3xl font-bold">{value}</h2>
      {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
      {change && (
        <p className={`flex items-center gap-1 text-xs mt-2 font-semibold ${isNegative ? "text-red-400" : "text-emerald-400"}`}>
          {isNegative ? <ArrowDown className="h-3 w-3" /> : <ArrowUp className="h-3 w-3" />}
          {change} from last month
        </p>
      )}
    </div>
  );
};

export default StatsCard;
