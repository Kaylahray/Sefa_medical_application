import React, { useState } from "react";

// general Tab Component
const Tabs = ({ tabs, selectedTab, onTabClick }) => {
  return (
    <div className="flex border-b lg:gap-[50px] border-gray-200">
      {tabs.map((tab, index) => (
        <div
          key={tab.label}
          onClick={() => onTabClick(index)}
          className={`cursor-pointer py-4 font-[400] text-18px px-6 relative ${
            selectedTab === index
              ? "text-[#283231]"
              : "text-[#7A7A7A] hover:text-gray-700"
          }`}
        >
          {tab.label}
          {selectedTab === index && (
            <div className="absolute bottom-0 left-1/4 right-1/4 h-[4px] w-[30%] bg-[#283231] mx-auto" />
          )}
        </div>
      ))}
    </div>
  );
};

const TabCOmponent = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const ActiveComponent = tabs[selectedTab].component;

  return (
    <div className="container mx-auto px-4">
      <Tabs tabs={tabs} selectedTab={selectedTab} onTabClick={setSelectedTab} />
      <div className="py-6">
        <ActiveComponent />
      </div>
    </div>
  );
};
export default TabCOmponent;
