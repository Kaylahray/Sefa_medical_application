import React from "react";
import Card from "../../Components/shared/DashboardCard";

const BlankTab = ({ content }) => {
  return (
    <Card>
      <div className="min-h-[400px] w-full">{content}</div>
    </Card>
  );
};

export default BlankTab;
