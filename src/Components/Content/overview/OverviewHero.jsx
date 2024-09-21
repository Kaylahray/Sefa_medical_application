import DashboardCard from "../../shared/DashboardCard";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import DoctorPana from "../../../assets/img/Doctors-pana 2.svg";
import Patient from "../../../assets/img/patient.svg";
import Staff from "../../../assets/img/staff icon.svg";
import Profit from "../../../assets/img/profit icon.png";

const OverviewHero = () => {
  return (
    <>
      <div className="bg-[#E4EAEA] md:h-[96px] flex flex-col md:flex-row justify-between items-center mb-5 px-5 py-10">
        <div className=" lg:ml-20 md:text-left">
          <h1 className="text-[#283231]  text-xl md:text-2xl font-semibold ">
            Welcome Back, Tobi.
          </h1>
          <p className="text-[#799794] text-base font-normal">
            25th October, 2022
          </p>
        </div>
        <div className="relative lg:mr-20">
          <img
            src={DoctorPana}
            alt="doctors banner"
            className="md:-mt-[88px] z-10"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-5">
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
