import React from 'react';
import DashboardCard from '../../shared/DashboardCard';
import box1 from "../../../assets/pbox1.svg"
import Search from '../../shared/Search';
import Select from '../../shared/Select';
import Button from '../../shared/Button';
const Statistics = () => {
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
    <h1>Patients Report</h1>
    <div className="flex flex-row gap-3 items-center justify-end ">
      <Search />
      <Select />
<Button> New Medication</Button>
    </div>

    <div className="flex flex-col md:flex-row gap-4 mb-6">
      {/* Total Medications */}
      <DashboardCard style={'md:w-64'}>
          <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={box1} alt="staff icon" />
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
        <DashboardCard style={'md:w-64'}>
          <div className="flex items-center gap-4  ">
            {/* img div */}
            <div className="img">
              <img src={box1} alt="staff icon" />
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



    
    </div>



  </div>



    
  );
}

export default Statistics;
