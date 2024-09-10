import React from "react";
import Card from "../../components/shared/Card";
import PatientChart from "../../components/analytics/PatientLineChart";
import GenderDonutChart from "../../components/analytics/GenderDonutChart";
import ReportedCasesChart from "../../components/analytics/ReportedCasesChart";
import HMOCoverageChart from "../../components/analytics/HMOCoverageChart";
import TabComponent from "../../components/analytics/TabComponent";
import Select from "../../components/shared/Select";

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
      <div className="mt-[32px] lg:w-[743px]">
        <HMOCoverageChart />
      </div>{" "}
    </>
  );
};

const StaffAnalyticis = () => <div>Overview Content</div>;
const FInancialAnalytics = () => <div>Patients Content</div>;
const PharmacyAnalytics = () => <div>Appointments Content</div>;
const LabAnalytics = () => <div>Lab Content</div>;

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
      <Select />
      <TabComponent tabs={tabData} />
    </>
  );
};

export default Analytics;
