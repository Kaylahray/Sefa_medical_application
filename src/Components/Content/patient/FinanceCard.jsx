import React from "react";
import DashboardCard from "../../shared/DashboardCard";
import Button from "../../shared/Button";
import bed from "../../../assets/img/patient.svg";
const FinanceCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-5">
        <DashboardCard>
          <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={bed} alt="staff icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                Total Due
              </span>
              <p className="text-boldColorText text-3xl font-normal ">
                1,000,000
              </p>
            </div>
          </div>
        </DashboardCard>
        <DashboardCard>
          <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={bed} alt="staff icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                Total Paid
              </span>
              <p className="text-boldColorText text-3xl font-normal ">
                1,000,000
              </p>
            </div>
          </div>
        </DashboardCard>
        <DashboardCard>
          <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={bed} alt="staff icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                Pending Payment
              </span>
              <p className="text-boldColorText text-3xl font-normal ">
                1,000,000
              </p>
            </div>
          </div>
        </DashboardCard>
        <DashboardCard>
          <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={bed} alt="staff icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                Covered by HMO
              </span>
              <p className="text-boldColorText text-3xl font-normal ">
                1,000,000
              </p>
            </div>
          </div>
        </DashboardCard>
        <div className=" flex items-end pb-1">
          <Button>Generate Receipt</Button>
        </div>
      </div>
      <div>
        <h2>Reciept History</h2>
      </div>
    </>
  );
};

export default FinanceCard;
