import Search from "../../shared/Search";
import Select from "../../shared/Select";
import DashboardCard from "../../shared/DashboardCard";

const patientReportHer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <h1>Patients Report</h1>
        <div className="flex flex-row gap-3 items-center justify-end ">
          <Search />
          <Select />
        </div>
      </div>
      <div className="">
        <DashboardCard style={"w-64"}></DashboardCard>
      </div>
    </div>
  );
};

export default patientReportHer;
