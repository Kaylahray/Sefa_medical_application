import React from "react";
import Card from "../../Components/shared/Card";
import PatientChart from "../../Components/Content/analytics/PatientLineChart";
import GenderDonutChart from "../../Components/Content/analytics/GenderDonutChart";
import ReportedCasesChart from "../../Components/Content/analytics/ReportedCasesChart";
import HMOCoverageChart from "../../Components/Content/analytics/HMOCoverageChart";

const Analytics = () => {
  return (
    <>
      <div className="grid  gap-4 lg:gap-0 lg:grid-cols-4 mt-[32px]">
        <div className="lg:col-span-3">
          <Card>
            <PatientChart />
          </Card>
        </div>
        <Card>
          <GenderDonutChart />
        </Card>
      </div>

      <div className="mt-[32px]">
        <Card>
          <ReportedCasesChart />
        </Card>
      </div>

      <div className="mt-[32px] lg:w-[743px]">
        <HMOCoverageChart />
      </div>
    </>
  );
};

export default Analytics;
