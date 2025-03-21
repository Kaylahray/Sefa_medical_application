import React from "react";
import AppointmentTable from "../../../Components/patient/AppointmentTable";
import Search from "../../../Components/shared/Search";
import Select from "../../../Components/shared/Select";

const Appointments = () => {
  return (
    <div>
      <div className="md:flex items-center justify-between mb-[40px]">
        <span className="font-[600] md:text-[32px] text-[#292929]">
          Appointments
        </span>
        <div className="flex items-center gap-3 justify-end lg:w-[70%]">
          <Search />
          <Select />
        </div>
      </div>
      <AppointmentTable />
    </div>
  );
};

export default Appointments;
