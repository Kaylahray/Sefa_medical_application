import TabComponent from "../../../Components/Content/analytics/TabComponent";
import BlankTab from "../../analytics/BlankTab";
import back from "../../../assets/back.svg";
import PatientCard from "../../../Components/Content/patient/PatientCard";
import BiodataDetails from "../../../Components/Content/patient/BiodataDetails";
import MedicalAccordion from "../../../Components/Content/patient/MedicalAccordion";
import HMOInfoCard from "../../../Components/Content/patient/HMOInfoCard";
import ConsultationAccordion from "../../../Components/Content/patient/ConsultationAccordion";
import FinanceCard from "../../../Components/Content/patient/FinanceCard";
const Biodata = () => <BlankTab content={<BiodataDetails />} />;

const Hmo = () => <BlankTab content={<HMOInfoCard />} />;

const PatientDetails = () => {
  const tabData = [
    { label: "Bio Data", component: Biodata },
    { label: "Medical History", component: MedicalAccordion },
    { label: "HMO", component: Hmo },
    { label: "Finance", component: FinanceCard },
    { label: "Consultation", component: ConsultationAccordion },
  ];
  return (
    <>
      <div className="w-full">
        <div className=" px-8 py-2">
          <div>
            <img src={back} alt="" srcset="" />
          </div>
        </div>

        <TabComponent tabs={tabData} />
      </div>
    </>
  );
};

export default PatientDetails;
