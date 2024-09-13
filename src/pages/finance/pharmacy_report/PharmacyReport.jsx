import PharmacyReportHero from "../../../Components/Content/finance/PharmacyReport";
import PharmacyReportTable from "../../../Components/Content/finance/PharmacyReportTable";
import Pagination from "../../../Components/shared/Pagination";

const PharmacyReport = () => {
  return (
    <div>
      <PharmacyReportHero />
      <PharmacyReportTable />
      <div className="">
        <Pagination totalItems={100000} itemsPerPage={10} />
      </div>
    </div>
  )
}

export default PharmacyReport
