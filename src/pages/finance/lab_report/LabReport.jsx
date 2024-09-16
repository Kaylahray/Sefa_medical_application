import LabsReportHero from "../../../Components/Content/finance/LabsReportHero"
import LabsReoprtTable from "../../../Components/Content/finance/LabsReoprtTable";
import Pagination from "../../../Components/shared/Pagination";

const LabReport = () => {
  return (
    <div>
      <LabsReportHero />
      <LabsReoprtTable />
      <div className="">
        <Pagination />
      </div>
    </div>
  )
}

export default LabReport
