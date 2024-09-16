import TabComponent from "../../../Components/Content/analytics/TabComponent";
import BlankTab from "../../analytics/BlankTab";
import Select from "../../../Components/shared/Select";
import PatientCard from "../../../Components/Content/patient/PatientCard";
import BiodataDetails from "../../../Components/Content/patient/BiodataDetails";
import MedicalAccordion from "../../../Components/Content/patient/MedicalAccordion";
import HMOInfoCard from "../../../Components/Content/patient/HMOInfoCard";
const Biodata = () => <BlankTab content={<BiodataDetails />} />;
const MedicalHistory = () => (
  <BlankTab content={<MedicalAccordion />} />
);
const Hmo = () => <BlankTab content={<HMOInfoCard />} />;
const Finance = () => <BlankTab content={<PatientCard />} />;
const Consultation = () => {
  return (
    <>
      <p>Hello World </p>
    </>
  );
};

const PatientDetails = () => {
  const tabData = [
    { label: "Bio Data", component: Biodata },
    { label: "Medical History", component: MedicalHistory },
    { label: "HMO", component: Hmo },
    { label: "Finance", component: Finance },
    { label: "Consultation", component: Consultation },
  ];
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between px-8 py-1">
          <div></div>
          <div>
            <Select />
          </div>
        </div>

        <TabComponent tabs={tabData} />
      </div>
    </>
  );
};

export default PatientDetails;
