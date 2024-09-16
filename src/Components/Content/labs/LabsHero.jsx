import React from "react";
import Injection from "../../../assets/img/injection.svg";
import Coins from "../../../assets/img/coins.svg";
import Card from "../../shared/DashboardCard";

const LabsHero = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-5">
        <Card>
          <div className="col-span-1 flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Injection} alt="patient icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                Total Tests Conducted
              </span>
              <p className="text-boldColorText text-3xl font-normal ">500</p>
              {/* <span className="text-warning text-sm font-semibold  ">
              <FaArrowDown className="inline text-xs " /> 15% today
            </span> */}
            </div>
          </div>
        </Card>
        <Card>
          <div className="col-span-1 flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Coins} alt="patient icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                Income From Tests
              </span>
              <p className="text-boldColorText text-3xl font-normal ">
                N1,000,000
              </p>
              {/* <span className="text-warning text-sm font-semibold  ">
              <FaArrowDown className="inline text-xs " /> 15% today
            </span> */}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default LabsHero;
