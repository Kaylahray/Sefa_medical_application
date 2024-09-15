import PatientReportHero from "../../../Components/Content/finance/patientReportHer";
import PatientReportTable from "../../../Components/Content/finance/PatientReportTable";
import Pagination from "../../../Components/shared/Pagination";

const PatientsReport = () => {
  return (
    <div>
      <PatientReportHero />
      <PatientReportTable /> 
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default PatientsReport;
