import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import UsersContext from "../../../context/AuthContext";
import PermissionCheckboxes from "./PermissionCheckboxes";
import PermissionTabs from "./PermissionTabs";

const UserDetails = () => {
  const { id } = useParams();
  const { currentItems, editMode, toggleEditMode, handleEditChange } =
    useContext(UsersContext);
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
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.43994 9.66673H21.6693V12.3334H5.43994L12.5919 19.4854L10.7066 21.3707L0.335938 11.0001L10.7066 0.629395L12.5919 2.51473L5.43994 9.66673Z"
              fill="#292929"
            />
          </svg>
        </Link>
      </div>
      <div className="w-full max-w-5xl p-0 md:p-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-4 md:gap-[150px]">
            <div>
              <h3 className="text-[13px] font-[600] text-[#7A7A7A]">Name</h3>
              {editMode ? (
                <input
                  type="text"
                  name="fullName"
                  data-section="admin"
                  value={person.admin.firstName + " " + person.admin.lastName}
                  onChange={(e) => handleEditChange(e, person.id - 1)}
                  className="text-base font-medium text-[#292929] whitespace-nowrap mt-1 input input-bordered"
                />
              ) : (
                <p className="text-base font-medium text-[#292929] whitespace-nowrap">
                  {person.admin.firstName} {person.admin.lastName}
                </p>
              )}
            </div>

            <div>
              <h3 className="text-[13px] font-[600] text-[#7A7A7A]">
                Email Address
              </h3>
              {editMode ? (
                <input
                  type="text"
                  name="email"
                  data-section="admin"
                  value={person.admin.email}
                  onChange={(e) => handleEditChange(e, person.id - 1)}
                  className="text-base font-medium text-[#292929] mt-1  input input-bordered"
                />
              ) : (
                <p className="text-base font-medium text-[#292929]">
                  {person.admin.email}
                </p>
              )}
            </div>

            <div>
              <h3 className="text-[13px] font-[600] text-[#7A7A7A]">Role</h3>
              {editMode ? (
                <input
                  type="text"
                  data-section="admin"
                  name="role"
                  value={person.admin.role}
                  onChange={(e) => handleEditChange(e, person.id - 1)}
                  className="text-base font-medium text-[#292929] mt-1 input input-bordered"
                />
              ) : (
                <p className="text-base font-medium text-[#292929]">
                  {person.admin.role}
                </p>
              )}
            </div>

            {/* Status */}
            <div>
              <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                  person.admin.status === "online"
                    ? "bg-green-100 text-[#03A300]"
                    : "bg-red-100 text-[#A35800]"
                }`}
              >
                {person.admin.status}
              </span>
            </div>
          </div>

          <PermissionTabs />
          <div className="flex justify-end">
            <button onClick={toggleEditMode}>
              {editMode ? "Done" : "Edit Text"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
