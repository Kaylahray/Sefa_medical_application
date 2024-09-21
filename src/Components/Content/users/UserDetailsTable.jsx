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
      <div className="w-full max-w-5xl p-0 md:p-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-4 md:gap-[150px]">
            <div>
              <h3 className="text-[13px] font-[600] text-[#7A7A7A]">Name</h3>
              {editMode ? (
                <input
                  type="text"
                  name="fullName"
                  value={person.admin.firstName + " " + person.admin.lastName}
                  onChange={(e) => handleEditChange(e, person.id - 1)}
                  className="text-base font-medium text-[#292929] whitespace-nowrap outline rounded"
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
                  value={person.admin.email}
                  onChange={(e) => handleEditChange(e, person.id - 1)}
                  className="text-base font-medium text-[#292929]  outline rounded"
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
                  name="role"
                  value={person.admin.role}
                  onChange={(e) => handleEditChange(e, person.id - 1)}
                  className="text-base font-medium text-[#292929] outline rounded"
                />
              ) : (
                <p className="text-base font-medium text-[#292929]">
                  {person.admin.role}
                </p>
              )}
            </div>
          </div>

          <PermissionTabs />
          <div className="flex justify-end">
            <button onClick={toggleEditMode}>
              {editMode ? "Done" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
