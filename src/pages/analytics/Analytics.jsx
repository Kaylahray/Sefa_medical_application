import React from "react";
import Card from "../../components/shared/Card";
import PatientChart from "../../components/analytics/PatientLineChart";
import GenderDonutChart from "../../components/analytics/GenderDonutChart";

const Analytics = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3">
        <Card>
          <PatientChart />
        </Card>
      </div>
      <Card>
        <GenderDonutChart />
      </Card>
    </div>
  );
};

export default Analytics;
