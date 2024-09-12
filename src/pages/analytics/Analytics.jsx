import React from "react";
import Card from "../../Components/shared/Card";
import PatientChart from "../../Components/Content/analytics/PatientLineChart";
import GenderDonutChart from "../../Components/Content/analytics/GenderDonutChart";
import ReportedCasesChart from "../../Components/Content/analytics/ReportedCasesChart";
import HMOCoverageChart from "../../Components/Content/analytics/HMOCoverageChart";
import TabComponent from "../../Components/Content/analytics/TabComponent";
import Select from "../../Components/shared/Select";
import BlankTab from "./BlankTab";

const PatientAnalystics = () => {
  return (
    <>
      <Card>
        <div className="flex flex-col lg:flex-row">
          <div className=" w-full lg:w-[70%] py-3 ">
            <PatientChart />
          </div>
          <div className=" lg:border-l border-[#E0E0E0] w-full lg:w-[30%] pb-5 lg:py-3 pl-3 ">
            <GenderDonutChart />
          </div>
        </div>
      </Card>
      <div className="mt-[32px]">
        <Card style={"py-2"}>
          <ReportedCasesChart />
        </Card>
      </div>
      <div className="mt-[32px] lg:w-[50%] py-2">
        <HMOCoverageChart />
      </div>
    </>
  );
};

const StaffAnalytics = () => <BlankTab content="Staff Analytics" />;
const FinancialAnalytics = () => <BlankTab content="Financial Analytics" />;
const PharmacyAnalytics = () => <BlankTab content="Pharmacy Analytics" />;
const LabAnalytics = () => <BlankTab content="Lab Analytics" />;
const Analytics = () => {
  const tabData = [
    { label: "Patient Analytics", component: PatientAnalystics },
    { label: "Staff Analytics", component: StaffAnalytics },
    { label: "Financial Analytics", component: FinancialAnalytics },
    { label: "Pharmacy Analytics", component: PharmacyAnalytics },
    { label: "Lab Analytics", component: LabAnalytics },
  ];
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between px-8 py-1">
          <div></div>
          <div>
            <Select />
          </div>
        </div>

        <TabComponent tabs={tabData} />
      </div>
    </>
  );
};

export default Analytics;
