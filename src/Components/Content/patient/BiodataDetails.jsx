import { useContext } from "react";
import { useParams } from "react-router-dom";
import edit from "../../../assets/edit.svg";
import Button from "../../shared/Button";
import UsersContext from "../../../context/AuthContext";

const BiodataDetails = () => {
  const { patientID } = useParams(); // Get patientID from URL
  const { currentItems, editMode, toggleEditMode, handleEditChange } =
    useContext(UsersContext);

  // Convert patientID from string to number
  const numericPatientID = Number(patientID);

  // Find the patient based on the ID from the URL
  const patient = currentItems.find(
    (user) => user.patients.ID_Number === numericPatientID
  );

  // If patient not found, display a message
  if (!patient) {
    return <p>Patient not found</p>;
  }

  const { patients } = patient; // Destructure patient object
  const index = currentItems.indexOf(patient); // Get the index of the patient in the currentItems array

  return (
    <div className="w-full h-full p-4">
      <div className="flex justify-between gap-20">
        <div className="grid md:grid-cols-2 flex-1 gap-4">
          {/* First Column */}
          {[
            {
              label: "First Name",
              value: patients.firstName,
              fieldName: "firstName",
            },
            { label: "Date of Birth", value: patients.dob, fieldName: "dob" },
            {
              label: "Last Name",
              value: patients.lastName,
              fieldName: "lastName",
            },
            {
              label: "State of Birth",
              value: patients.stateOfBirth,
              fieldName: "state",
            },
            { label: "Age", value: patients.age, fieldName: "age" },
            {
              label: "Email Address",
              value: patients.email,
              fieldName: "email",
            },
            { label: "Gender", value: patients.gender, fieldName: "gender" },
            {
              label: "Phone Number",
              value: patients.phoneNumber,
              fieldName: "phone",
            },
            { label: "Height", value: patients.height, fieldName: "height" },
            {
              label: "Residential Address",
              value: `${patients.address.street}, ${patients.address.city}.`,
            },
            { label: "Weight", value: patients.weight, fieldName: "weigth" },
            {
              label: "Marital Status",
              value: patients.maritalStatus || "N/A",
              fieldName: "marriage",
            },
          ].map(({ label, value, fieldName }) => (
            <div key={label} className="">
              <p className="text-[#7A7A7A] text-[16px] font-semibold ">
                {label}
              </p>
              {fieldName ? (
                editMode ? (
                  <input
                    type="text"
                    name={fieldName}
                    data-section="patients"
                    value={value}
                    onChange={(e) => handleEditChange(e, index)}
                    className="text-base font-medium text-[#292929] whitespace-nowrap input input-bordered"
                  />
                ) : (
                  <p className="text-[#292929] text-[18px] mt-1 font-semibold">
                    {value}
                  </p>
                )
              ) : (
                <p className="text-[#292929] text-[18px] mt-1 font-semibold">
                  {value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Second Column */}
        <div className="flex flex-col md:flex-row flex-1 justify-between">
          <div className="flex flex-col gap-4">
            {[
              {
                label: "Genotype",
                value: patients.genotype,
                fieldName: "genotype",
              },
              {
                label: "Blood Group",
                value: patients.bloodGroup,
                fieldName: "bloodGroup",
              },
              {
                label: "ID Number",
                value: patients.ID_Number,
              },
            ].map(({ label, value, fieldName }) => (
              <div key={label}>
                <p className="text-[#7A7A7A] text-[16px] font-semibold">
                  {label}
                </p>
                {fieldName ? (
                  editMode ? (
                    <input
                      type="text"
                      name={fieldName}
                      data-section="patients"
                      value={value}
                      onChange={(e) => handleEditChange(e, index)}
                      className="text-base font-medium text-[#292929] whitespace-nowrap input input-bordered"
                    />
                  ) : (
                    <p className="text-[#292929] text-[18px] mt-1 font-semibold">
                      {value}
                    </p>
                  )
                ) : (
                  <p className="text-[#292929] text-[18px] mt-1 font-semibold">
                    {value}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Profile Image and Buttons */}
          <div className="flex flex-col items-end justify-between">
            <img
              src={`https://picsum.photos/300/300`}
              alt="Profile"
              className="w-28 h-28 object-cover rounded-full mb-4"
            />
            <div className="flex flex-col items-end">
              <button
                className="flex items-center mb-4 font-inter font-normal text-sm text-[#516563]"
                onClick={toggleEditMode}
              >
                {editMode ? (
                  "Done"
                ) : (
                  <span className="flex items-center">
                    <img src={edit} alt="Edit" /> "Edit Profile"
                  </span>
                )}
              </button>
              <Button>Set Appointment</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodataDetails;
