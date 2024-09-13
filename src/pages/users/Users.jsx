import React from "react";
import Search from "../../Components/shared/Search";
import Select from "../../Components/shared/Select";
import Button from "../../Components/shared/Button";
import Card from "../../Components/shared/Card";
import UsersTable from "../../Components/Content/users/UsersTable";
import UsersHero from "../../Components/Content/users/UsersHero";

const Users = () => {
  return (
    <>
      <UsersHero />
      <UsersTable />
    </>
  );
};

export default Users;
