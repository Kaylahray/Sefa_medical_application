import React from "react";
import Select from "../../../Components/shared/Select";
import Button from "../../../Components/shared/Button";
import Search from "../../../Components/shared/Search";
import PatientCard from "../../../Components/Content/patient/PatientCard";
import PatientTable from "../../../Components/Content/patient/PatientTable";
// import AllPatientsHero from "../../Components/Content/labs/LabsHero";
// import AllPatientsTable from "../../Components/Content/labs/LabTable";

const AllPatients = () => {
  return (
    <>
      <div className="lg:flex-row flex flex-col items-start lg:items-center justify-between">
        <h3 className="text-boldColorText">Patients</h3>
        <div className="flex-col flex lg:flex-row items-center gap-[24px] justify-between">
          <Search />
          <div className="flex items-center gap-6 lg:gap-[24px]">
          <Select />
          <Button>New Patient</Button>
          </div>
         
        </div>
      </div>
      <PatientCard />
      {/* <LabsHero /> */}
      <PatientTable />
    </>
  );
};

export default AllPatients;
