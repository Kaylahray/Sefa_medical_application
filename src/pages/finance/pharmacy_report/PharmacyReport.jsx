import PharmacyReportHero from "../../../Components/Content/finance/PharmacyReport";
import PharmacyReportTable from "../../../Components/Content/finance/PharmacyReportTable";
import Pagination from "../../../Components/shared/Pagination";

const PharmacyReport = () => {
  return (
    <div>
      <PharmacyReportHero />
      <PharmacyReportTable />
      <div className="">
        <Pagination />
      </div>
    </div>
  )
}

export default PharmacyReport
