import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../../../context/AuthContext";
import TabComponent from "../../../Components/Content/analytics/TabComponent";
import PatientsReportsTotalPaid from "../../../Components/Content/finance/PatientsReportsTotalPaid";
import PatientsReportCoverHMO from "../../../Components/Content/finance/PatientsReportCoverHMO";
import { FaArrowLeft } from "react-icons/fa6";

const EachPatientReport = () => {
  const { currentItems } = useContext(UsersContext);
  const { id } = useParams();
  const ID = Number(id);
  console.log(ID);
  const tabData = [
    { label: "Total Paid", component: PatientsReportsTotalPaid },
    { label: "Covered By HMO", component: PatientsReportCoverHMO },
  ];

  return (
    <div>
      <Link to={"/finance/patients-report"} className="mb-5 text-boldColorText">
        <FaArrowLeft />
      </Link>
      {currentItems
        .filter((person) => person.id === ID)
        .map((person) => (
          <p className=" mt-5 mb-5 text-boldColorText font-semibold text-2xl">
            {person.patients.firstName} {person.patients.lastName}
          </p>
        ))}
      <TabComponent tabs={tabData} />
    </div>
  );
};

export default EachPatientReport;
