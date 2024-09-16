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
      <div className="flex items-center justify-between">
        <h3>Patients</h3>
        <div className="flex items-center gap-[24px] justify-between">
          <Search />
          <Select />
          <Button>New Patient</Button>
        </div>
      </div>
      <PatientCard />
      {/* <LabsHero /> */}
      <PatientTable />
    </>
  );
};

export default AllPatients;
