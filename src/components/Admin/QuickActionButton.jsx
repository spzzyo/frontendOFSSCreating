import React from "react";

const QuickActionButton = ({ icon: Icon, text, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center gap-2 bg-emerald-600 text-white rounded-lg py-3 hover:bg-emerald-700 transition"
  >
    {Icon && <Icon className="h-5 w-5" />}
    {text}
  </button>
);

export default QuickActionButton;
