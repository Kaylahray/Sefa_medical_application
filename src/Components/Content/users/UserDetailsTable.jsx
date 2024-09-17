import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import UsersContext from "../../../context/AuthContext";
import PermissionCheckboxes from "./PermissionCheckboxes";

const UserDetails = () => {
  const { id } = useParams();
  const { currentItems } = useContext(UsersContext);
  const ID = Number(id);
  const person = currentItems.find((person) => person.id === ID);

  if (!person) {
    return <div>User Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full max-w-5xl p-0 md:px-8 pb-2">
        <h2 className="text-xl font-semibold pt-8 pb-6">User Details</h2>

        <Link to="/users">
          <svg
            className="inline-block mb-0"
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

      {/* User Details Section */}
      <div className="w-full max-w-5xl p-0 md:p-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-4 gap-6">
            {/* Name */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Name</h3>
              <p className="text-base font-medium text-gray-900">
                {person.admin.firstName} {person.admin.lastName}
              </p>
            </div>
            {/* Email */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500">
                Email Address
              </h3>
              <p className="text-base font-medium text-gray-900">
                {person.admin.email}
              </p>
            </div>
            {/* Role */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Role</h3>
              <p className="text-base font-medium text-gray-900">
                {person.admin.role}
              </p>
            </div>
            {/* Status */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Status</h3>
              <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                  person.admin.status === "online"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}>
                {person.admin.status}
              </span>
            </div>
          </div>
          <PermissionCheckboxes />
          <div className="flex justify-end">
            <Link>Edit Text</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
