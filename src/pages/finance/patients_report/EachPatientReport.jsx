import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import UsersContext from "../../../context/AuthContext";

const EachPatientReport = () => {
  const { people, loading } = useContext(UsersContext);
  const { id } = useParams();

  // Convert the id to a number (since person.id is a number)
  const patientId = Number(id);

  // Debugging: Check if the data is correct
  useEffect(() => {
    console.log("ID from useParams:", id);
    console.log("Converted patientId:", patientId);
    console.log("People array:", people);
  }, [id, patientId, people]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Find the patient with matching ID
  const person = people.find((person) => person.id === patientId);

  if (!person) {
    return <div>Person not found</div>; // In case no patient is found
  }

  // Render the patient's data
  return (
    <div>
      <h1>Patient Report</h1>
      <p>
        Name: {person.patients.firstName} {person.patients.lastName}
      </p>
      <p>Email: {person.patients.email}</p>
      <p>Gender: {person.patients.gender}</p>
      <p>Age: {person.patients.age}</p>
      <p>Date of Birth: {person.patients.DOB}</p>
      <p>Phone: {person.patients.phone}</p>
      <p>Blood Group: {person.patients.bloodGroup}</p>
      <p>Genotype: {person.patients.genotype}</p>
      <p>Total Paid: {person.patients.totalPaid}</p>
      <p>Covered by HMO: {person.patients.coveredHMO}</p>
    </div>
  );
};

export default EachPatientReport;
