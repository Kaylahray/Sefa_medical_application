import React from "react";
import Card from "../../components/shared/Card";
import PatientChart from "../../components/analytics/PatientLineChart";
import GenderDonutChart from "../../components/analytics/GenderDonutChart";
import ReportedCasesChart from "../../components/analytics/ReportedCasesChart";
import HMOCoverageChart from "../../components/analytics/HMOCoverageChart";

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
