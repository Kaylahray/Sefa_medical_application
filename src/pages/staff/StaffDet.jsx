import React from "react";
import { CiEdit } from "react-icons/ci";
import Card from "../../Components/shared/Card";
import profile from "../../assets/img/profile.svg";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../../context/AuthContext";

function StaffDet() {
  const { id } = useParams();
  const ID = Number(id);
  const { currentItems } = useContext(UsersContext);

  return (
    <div>
      <h1 className="mb-3 text-lg font-semibold text-boldColorText">Staff Details</h1>
      <Link to={"/staff"}>
        <FaArrowLeft />
      </Link>
      <Card style={"mt-5"}>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentItems
            .filter((person) => person.id === ID)
            .map((person) => {
              const { staff } = person;
              return (
                <>
                  <div className="flex flex-col md:flex-row justify-between px-5 py-5 font-semibold">
                    <div>
                      <div className="mb-5">
                        <p className="text-lightColorText text-sm">position</p>
                        <p>{staff.position}</p>
                      </div>
                      <div className="mb-5">
                        <p className="text-lightColorText text-sm">
                          First Name
                        </p>
                        <p>{staff.firstName}</p>
                      </div>
                      <div className="mb-5">
                        <p className="text-lightColorText text-sm">Last Name</p>
                        <p>{staff.lastName}</p>
                      </div>
                      <div className="mb-5">
                        <p className="text-lightColorText text-sm">Gender</p>
                        <p>{staff.gender}</p>
                      </div>
                      <div className="mb-5">
                        <p className="text-lightColorText text-sm">
                          Email Address
                        </p>
                        <p>{staff.email}</p>
                      </div>
                      <div className="mb-5">
                        <p className="text-lightColorText text-sm">
                          Phone Number
                        </p>
                        <p>{staff.phone}</p>
                      </div>
                    </div>
                    <div>
                      <div className="mb-5">
                        <p className="text-lightColorText text-sm">
                          Residential Address
                        </p>
                        <p>
                          {staff.address.street} {staff.address.city},{" "}
                          {staff.address.state}
                        </p>
                      </div>
                      <div className="mb-5">
                        <p className="text-lightColorText text-sm">ID Number</p>
                        <p>{staff.ID_Number}</p>
                      </div>
                      <div className="mb-5">
                        <p className="text-lightColorText text-sm">
                          Patients Attended to
                        </p>
                        <p>{staff.patientsAttended}</p>
                      </div>
                      <div className="mb-5">
                        <p className="text-lightColorText text-sm">
                        Year Employed
                        </p>
                        <p>{staff.employed}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end px-5 py-5 ">
                    <div className="mb-12">
                      <img src={profile} alt="staff pics" className="mb-2" />
                      <span
                        className={` py-1.5 rounded mt-12 ${
                          staff.status === "Active"
                            ? "bg-activerBgColor text-activeTextColor px-8"
                            : "bg-inactiveBgColor text-inactiveTextColor px-5"
                        }`}
                      >
                        {staff.status}
                      </span>
                    </div>
                    <Link
                      to={"#"}
                      className="text-[#516563] font-normal text-sm pl-3"
                    >
                      <CiEdit className="inline text-lg" /> Edit Profile
                    </Link>
                  </div>
                </>
              );
            })}
        </div>
      </Card>
    </div>
  );
}

export default StaffDet;
