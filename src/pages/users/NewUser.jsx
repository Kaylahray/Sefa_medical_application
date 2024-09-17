import React from "react";
import MyForm from "../../Components/Content/users/MyForm";
import Button from "../../Components/shared/Button";
import PermissionCheckboxes from "../../Components/Content/users/PermissionCheckboxes";
import { Link } from "react-router-dom";

const NewUser = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* header-section */}
      <div className="w-full max-w-5xl p-0 md:px-8 pb-2 ">
        <h2 className="text-xl font-semibold pt-8 pb-6">New User</h2>

        <Link to="/users">
          <svg
            className="inline-block mb-0 "
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.43994 9.66673H21.6693V12.3334H5.43994L12.5919 19.4854L10.7066 21.3707L0.335938 11.0001L10.7066 0.629395L12.5919 2.51473L5.43994 9.66673Z"
              fill="#292929"
            />
          </svg>
        </Link>
      </div>

      {/* form-section */}
      <div className="w-full max-w-5xl p-0 md:p-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <MyForm />

          {/* Permissions */}
          <PermissionCheckboxes />

          {/* Button */}
          <div className="text-right">
            <Link to="/users">
              <Button className="px-10">Create User </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
