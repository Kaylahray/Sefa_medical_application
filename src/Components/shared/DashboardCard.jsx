import React from "react";

const DashboardCard = ({ children, style }) => {
  return (
    <div
      className={`w-full card bg-white card-compact border border-[#E0E0E0] rounded-lg px-3 py-4 ${style}`}
    >
      {children}
    </div>
  );
};

export default DashboardCard;
