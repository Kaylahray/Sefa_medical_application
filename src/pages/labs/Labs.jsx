import React from "react";
import Search from "../../components/shared/Search";
import Select from "../../components/shared/Select";
import Button from "../../components/shared/Button";
import LabsHero from "../../components/content/labs/LabsHero";
import LabTable from "../../components/content/labs/LabTable";

const Labs = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3>Labs</h3>
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
