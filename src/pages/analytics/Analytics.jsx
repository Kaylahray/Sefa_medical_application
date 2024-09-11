import React from "react";
import Card from "../../components/shared/Card";
import PatientChart from "../../components/analytics/PatientLineChart";
import GenderDonutChart from "../../components/analytics/GenderDonutChart";
import ReportedCasesChart from "../../components/analytics/ReportedCasesChart";
import HMOCoverageChart from "../../components/analytics/HMOCoverageChart";
import TabComponent from "../../components/analytics/TabComponent";
import Select from "../../components/shared/Select";
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
        <Card>
          <ReportedCasesChart />
        </Card>
      </div>
      <div className="mt-[32px] lg:w-[50%]">
        <HMOCoverageChart />
      </div>{" "}
    </>
  );
};

const StaffAnalyticis = BlankTab;
const FInancialAnalytics = BlankTab;
const PharmacyAnalytics = BlankTab;
const LabAnalytics = BlankTab;

const Analytics = () => {
  const tabData = [
    { label: "Patient Analytics", component: PatientAnalystics },
    { label: "Staff Analytics", component: StaffAnalyticis },
    { label: "Financia Analytics", component: FInancialAnalytics },
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
