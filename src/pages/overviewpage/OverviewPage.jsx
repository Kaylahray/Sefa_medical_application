import React from "react";
import PatientLineChart from "../../components/patient/charts/PatientLineChart";
import GenderDonutChart from "../../components/patient/charts/GenderDonutChart";

const OverviewPage = () => {
  return (
    <div>
      <PatientLineChart />
      <GenderDonutChart />
    </div>
  );
};

export default OverviewPage;
