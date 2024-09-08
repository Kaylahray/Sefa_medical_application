import React from "react";
import PatientChart from "../../components/patient/charts/PatientLineChart";
import GenderDonutChart from "../../components/patient/charts/GenderDonutChart";

const OverviewPage = () => {
  return (
    <div>
      <PatientChart />
      <GenderDonutChart />
    </div>
  );
};

export default OverviewPage;
