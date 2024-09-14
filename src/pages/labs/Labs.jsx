import React from "react";
import Search from "../../Components/shared/Search";
import Select from "../../Components/shared/Select";
import Button from "../../Components/shared/Button";
import LabsHero from "../../Components/Content/labs/LabsHero";
import LabTable from "../../Components/Content/labs/LabTable";

const Labs = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-[40px]">
        <span className="font-[600] md:text-[32px] text-[#292929]">Labs</span>
        <div className="flex items-center gap-[24px] justify-between">
          <Search />
          <Select />
          <Button>Add Text</Button>
        </div>
      </div>
      <LabsHero />
      <LabTable />
    </>
  );
};

export default Labs;
