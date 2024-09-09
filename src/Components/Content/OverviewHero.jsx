import DashboardCard from "../shared/DashboardCard";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import DoctorPana from "../../assets/img/Doctors-pana 2.svg";
import Patient from "../../assets/img/patient.svg";
import Staff from "../../assets/img/staff icon.svg";
import Profit from "../../assets/img/profit icon.png";

const OverviewHero = () => {
  return (
    <>
      <div className="bg-[#E4EAEA] mb-5 px-5 py-5">
        <div className="md:ml-20">
          <h1 className="text-[#283231] text-xl md:text-2xl font-semibold ">
            Welcome Back, Tobi.
          </h1>
          <p className="text-[#799794] text-base font-normal">
            25th October, 2022
          </p>
        </div>
        <div className="hidden md:block relative">
          <img
            src={DoctorPana}
            alt="doctors banner"
            className="md:absolute right-10 top-1/2 -mt-[185px] z-10"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        {/* card 1 */}
        <DashboardCard>
          <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Patient} alt="patient icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                Patients Today
              </span>
              <p className="text-boldColorText text-3xl font-normal ">10,000</p>
              <span className="text-warning text-sm font-semibold  ">
                <FaArrowDown className="inline text-xs " /> 15% today
              </span>
            </div>
          </div>
        </DashboardCard>
        {/* card 2 */}
        <DashboardCard>
          <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Patient} alt="patient icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                New Patients
              </span>
              <p className="text-boldColorText text-3xl font-normal ">10,000</p>
              <span className="text-activeTextColor text-sm font-semibold  ">
                <FaArrowUp className="inline text-xs " /> 15% today
              </span>
            </div>
          </div>
        </DashboardCard>
        {/* card 3 */}
        <DashboardCard>
          <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Staff} alt="staff icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                Total Staff
              </span>
              <p className="text-boldColorText text-3xl font-normal ">10,000</p>
            </div>
          </div>
        </DashboardCard>
        {/* card 4 */}
        <DashboardCard>
          <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Profit} alt="profit icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                Profit This Month
              </span>
              <p className="text-boldColorText text-3xl font-normal ">10,000</p>
              <span className="text-activeTextColor text-sm font-semibold  ">
                <FaArrowUp className="inline text-xs " /> 15% today
              </span>
            </div>
          </div>
        </DashboardCard>
        {/* card 5 */}
        <DashboardCard>
          <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Staff} alt="Staff icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                Active Doctors
              </span>
              <p className="text-boldColorText text-3xl font-normal ">10,000</p>
            </div>
          </div>
        </DashboardCard>
      </div>
    </>
  );
};

export default OverviewHero;
