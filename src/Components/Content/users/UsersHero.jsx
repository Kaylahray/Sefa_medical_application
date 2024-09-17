import React from "react";
import Search from "../../shared/Search";
import Select from "../../shared/Select";
import Button from "../../shared/Button";
import DashboardCard from "../../shared/DashboardCard";
import Profit from "../../../assets/profile.svg";
import { Link } from "react-router-dom";

const UsersHero = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <h1 className="text-boldColorText text-xl font-semibold ">
          {/* Patients Report */} Users
        </h1>
        <div className="flex flex-row gap-3 items-center justify-end ">
          <Search />
          <Select />
          <Link to="/newuser">
            <Button className="px-10">New Medication</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-5">
        <DashboardCard>
          <div className="flex items-center gap-4 pr-4">
            <div className="img">
              <img src={Profit} alt="profit icon" />
            </div>

            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                Total Users
              </span>
              <p className="text-boldColorText text-2xl font-normal ">
                1,000,000
              </p>
              <span className="text-activeTextColor text-sm font-semibold  "></span>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default UsersHero;
