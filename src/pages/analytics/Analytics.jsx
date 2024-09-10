import React from "react";
import Card from "../../components/shared/Card";
import PatientChart from "../../components/analytics/PatientLineChart";
import GenderDonutChart from "../../components/analytics/GenderDonutChart";
import ReportedCasesChart from "../../components/analytics/ReportedCasesChart";

const Analytics = () => {
  return (
    <>
      <div className="grid  gap-4 lg:gap-0 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <Card>
            <PatientChart />
          </Card>
        </div>
        <Card>
          <GenderDonutChart />
        </Card>
      </div>

      <div className="mt-4">
        <Card>
          <ReportedCasesChart />
        </Card>
      </div>
    </>
  );
};

export default Analytics;
