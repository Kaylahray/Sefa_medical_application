import React from "react";
import UsersTable from "../../Components/Content/users/UsersTable";
import UsersHero from "../../Components/Content/users/UsersHero";
import Pagination from "../../Components/shared/Pagination";

const Users = () => {
  return (
    <>
      <UsersHero />
      <UsersTable />
      <div className="">
        <Pagination />
      </div>
    </>
  );
};

export default Users;
