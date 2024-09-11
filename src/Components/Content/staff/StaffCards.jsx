import React from 'react'
import DashboardCard from '../../shared/DashboardCard'
import Staff from "../../../assets/img/staff icon.svg";
import Card from '../../shared/Card'
import users from '../../../assets/img/users.svg'


function StaffCards() {
  return (
    <div>
      <DashboardCard>
      <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Staff} alt="patient icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                New Patients
              </span>
              <p className="text-boldColorText text-3xl font-normal ">10,000</p>
              {/* <span className="text-activeTextColor text-sm font-semibold  ">
                <FaArrowUp className="inline text-xs " /> 15% today
              </span> */}
            </div>
          </div>
      </DashboardCard>
      
      <DashboardCard>
      <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Staff} alt="patient icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                New Patients
              </span>
              <p className="text-boldColorText text-3xl font-normal ">10,000</p>
              {/* <span className="text-activeTextColor text-sm font-semibold  ">
                <FaArrowUp className="inline text-xs " /> 15% today
              </span> */}
            </div>
          </div>
      </DashboardCard>

      <DashboardCard>
      <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Staff} alt="patient icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                New Patients
              </span>
              <p className="text-boldColorText text-3xl font-normal ">10,000</p>
              {/* <span className="text-activeTextColor text-sm font-semibold  ">
                <FaArrowUp className="inline text-xs " /> 15% today
              </span> */}
            </div>
          </div>
      </DashboardCard>

      <DashboardCard>
      <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Staff} alt="patient icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                New Patients
              </span>
              <p className="text-boldColorText text-3xl font-normal ">10,000</p>
              {/* <span className="text-activeTextColor text-sm font-semibold  ">
                <FaArrowUp className="inline text-xs " /> 15% today
              </span> */}
            </div>
          </div>
      </DashboardCard>

      <DashboardCard>
      <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Staff} alt="patient icon" />
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

      <DashboardCard>
      <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Staff} alt="patient icon" />
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
    </div>
  )
}

export default StaffCards
