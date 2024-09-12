import Search from "../../shared/Search";
import Select from "../../shared/Select";
import DashboardCard from "../../shared/DashboardCard";
import Profit from "../../../assets/img/profit icon.png";
import Bank from "../../../assets/img/bank.svg";

const style = {
  width: "md:w-64",
};
const PharmacyReport = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <h1 className="text-boldColorText text-xl font-semibold ">
          Pharmacy Report
        </h1>
        <div className="flex flex-row gap-3 items-center justify-end ">
          <Search />
          <Select />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-3 mt-5">
        <DashboardCard style={style.width}>
          <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Profit} alt="profit icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                Income from Meds
              </span>
              <p className="text-boldColorText text-3xl font-normal ">
                1,000,000
              </p>
            </div>
          </div>
        </DashboardCard>
        <DashboardCard style={style.width}>
          <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Bank} alt="profit icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                Pending From HMO
              </span>
              <p className="text-boldColorText text-3xl font-normal ">
                1,000,000
              </p>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default PharmacyReport;
