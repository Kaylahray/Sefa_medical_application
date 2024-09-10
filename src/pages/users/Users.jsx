import React from "react";
import Search from "../../Components/shared/Search";
import Select from "../../Components/shared/Select";
import Button from "../../Components/shared/Button";
import Card from "../../Components/shared/Card";
import UsersTable from "./UsersTable";

const Users = () => {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between mb-4 border-4 border-gray-200">
        <h1 className=" flex items-center text-2xl font-semibold">Users</h1>
        <div className="flex items-center space-x-4">
          <Search />
          <Select />
          <Button text="New User" />
        </div>
      </div>

      {/* Card directly under Users Header */}
      <div className="flex justify-start mb-6">
        <Card className="w-64 h-32" />
      </div>
      <Search />
      {/* Users List Table */}
      <div className="mt-6">
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;
