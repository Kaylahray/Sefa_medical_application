import React from "react";
import Patient from "../../../assets/img/patient.svg";
import Staff from "../../../assets/img/staff icon.svg";
import Profit from "../../../assets/img/profit icon.png";
import DashboardCard from "../../shared/DashboardCard";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
const PatientCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mt-4 mb-5">
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
              Total Patients
            </span>
            <p className="text-boldColorText text-3xl font-normal ">
              10,000
            </p>
            <span className="text-activeTextColor text-sm font-semibold  ">
              <FaArrowUp className="inline text-xs " /> 15% today
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
              Patients Today
            </span>
            <p className="text-boldColorText text-3xl font-normal ">
              10,000
            </p>
            <span className="text-warning text-sm font-semibold  ">
              <FaArrowDown className="inline text-xs " /> 15% today
            </span>
          </div>
        </div>
      </DashboardCard>
      {/* card 3 */}
      <DashboardCard>
        <div className="flex items-center gap-4 ">
          {/* img div */}
          <div className="img">
            <img src={Patient} alt="patient icon" />
          </div>
          {/* side info inside card */}
          <div className="content">
            <span className="text-dasboardSmalText text-sm font-semibold">
              Patients Admitted
            </span>
            <p className="text-boldColorText text-3xl font-normal ">
              10,000
            </p>
            <span className="text-activeTextColor text-sm font-semibold  ">
              <FaArrowUp className="inline text-xs " /> 15% today
            </span>
          </div>
        </div>
      </DashboardCard>
      {/* card 4 */}
      <DashboardCard>
        <div className="flex items-center gap-4 ">
          {/* img div */}
          <div className="img">
            <img src={Patient} alt="patient icon" />
          </div>
          {/* side info inside card */}
          <div className="content">
            <span className="text-dasboardSmalText text-sm font-semibold">
              Patients with HMO
            </span>
            <p className="text-boldColorText text-3xl font-normal ">
              1,000,000
            </p>
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
            <img src={Profit} alt="profit icon" />
          </div>
          {/* side info inside card */}
          <div className="content">
            <span className="text-dasboardSmalText text-nowrap text-sm font-semibold">
              Pending Settlements
            </span>
            <p className="text-boldColorText text-3xl font-normal ">
              N10m
            </p>
            <span className="text-activeTextColor text-sm font-semibold  ">
              <FaArrowUp className="inline text-xs " /> 15% today
            </span>
          </div>
        </div>
      </DashboardCard>
    </div>
  );
};

export default PatientCard;
