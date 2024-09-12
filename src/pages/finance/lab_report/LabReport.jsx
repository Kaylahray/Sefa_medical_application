import LabsReportHero from "../../../Components/Content/finance/LabsReportHero"
import LabsReoprtTable from "../../../Components/Content/finance/LabsReoprtTable";
import Pagination from "../../../Components/shared/Pagination";

const LabReport = () => {
  return (
    <div>
      <LabsReportHero />
      <LabsReoprtTable />
      <div className="">
        <Pagination totalItems={100000} itemsPerPage={10} />
      </div>
    </div>
  )
}

export default LabReport
