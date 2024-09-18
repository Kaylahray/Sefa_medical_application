import React from "react";
import Card from "../../shared/Card";

const data = [
  {
    name: "Reliance HMO",
    patients: 15000,
    percentage: 32,
    color: "bg-[#EE6C4D]",
  },
  { name: "Ajocard", patients: 11000, percentage: 27, color: "bg-[#662C91]" },
  { name: "AXA", patients: 8000, percentage: 22, color: "bg-[#A8201A]" },
  {
    name: "Healthpoint HMO",
    patients: 5000,
    percentage: 15,
    color: "bg-[#F38D68]",
  },
  { name: "Hallmark", patients: 1000, percentage: 12, color: "bg-[#FF1053]" },
  {
    name: "Metrohealth",
    patients: 800,
    percentage: 10,
    color: "bg-[#F7EC59]",
  },
];

const HMOCoverageChart = () => {
  return (
    <Card>
      <div className="w-full h-[481px] p-2 md:p-4 ">
        <h3 className="text-[20px] font-[600] mb-[56px] text-[#3D3D3D]">
          HMOs And Patients Covered
        </h3>
        <div className="space-y-[22px] md:space-y-[32px]">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className=" pl-4 text-[16px] font-[600] text-[#516563]">
                    {item.name}
                  </span>
                  <span className="text-[16px] font-[600] text-[#516563]">
                    {item.patients.toLocaleString()} Patients ({item.percentage}
                    %)
                  </span>
                </div>
                <div className="w-full bg-gray-200 h-[2px]">
                  <div
                    className={`h-full ${item.color}`}
                    style={{ width: `${100 - item.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default HMOCoverageChart;
