import Card from "../../../Components/shared/Card";
import PatientChart from "../../../Components/Content/analytics/PatientLineChart";
import GenderDonutChart from "../../../Components/Content/analytics/GenderDonutChart";

const OverviewChart = () => {
  return (
    <div>
        <div className="mb-5">
        <p className="mb-2 text-boldColorText text-base font-semibold ">Activities</p>
        <Card>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[70%] py-3 ">
              <PatientChart />
            </div>
            <div className="lg:border-l border-[#E0E0E0] w-full lg:w-[30%] pb-5 lg:py-3 pl-3 ">
              <GenderDonutChart />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default OverviewChart