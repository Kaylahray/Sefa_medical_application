import edit from "../../../assets/edit.svg";
const HMOInfoCard = () => {
  return (
    <div className="w-full mx-auto p-6 bg-white">
      <div className="flex justify-between items-center mb-4">
        <div className="grid grid-cols-2 w-1/2">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              HMO Name
            </h2>
            <p className="font-medium">Reliance HMO</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-600">HMO Type</h3>
            <p>Private</p>
          </div>
        </div>

        <div className="flex items-center justify-self-end">
          <span>
            <img src={edit} alt="" />
          </span>
          <span className="text-sm">Update</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <h3 className="font-semibold text-gray-600">HMO Tier</h3>
          <p>Premium Individual</p>
        </div>
      </div>
      <h2 className="font-semibold mb-4">Tier Benefits</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <ul className="space-y-2" style={{ listStyleType: "disc" }}>
          <li>Primary/Secondary Dental Care</li>
          <li>
            Out Patient Care, General and Specialist Consultation
          </li>
          <li>Minor, Intermediate, Major Surgeries and Procedures</li>
          <li>Admissions (Including Feeding)</li>
          <li>Prescribed Medicines And Drugs</li>
          <li>Accidents & Emergencies</li>
          <li>
            Evacuation (Home/Hospital to Hospital & Road Side to
            Hospital)
          </li>
        </ul>

        <ul className="space-y-2" style={{ listStyleType: "disc" }}>
          <li>X-Rays, Laboratory & Diagnostic Tests</li>
          <li>Physiotherapy Sessions (Up to Approved Limit)</li>
          <li>Health Screening at Designated Centres</li>
          <li>NPI Immunizations</li>
          <li>
            Antenatal care, Induction of labour & Normal delivery
          </li>
          <li>
            Assisted delivery & Emergency or Medically Indicated
            Elective Caesarean Section
          </li>
        </ul>

        <ul className="space-y-2" style={{ listStyleType: "disc" }}>
          <li>Health Screening at Designated Centres</li>
          <li>NPI Immunizations</li>
          <li>
            Antenatal care, Induction of labour & Normal delivery
          </li>
          <li>
            Assisted delivery & Emergency or Medically Indicated
            Elective Caesarean Section
          </li>
          <li>
            HIV/AIDS – to the Extent of Diagnosis + Treatment at Free
            Specialist Centres
          </li>
        </ul>

        <ul className="space-y-2" style={{ listStyleType: "disc" }}>
          <li>Psychiatry Cover up to 8 Weeks</li>
          <li>
            Advanced and Complex Investigations (Including CT Scan,
            MRI Scan)
          </li>
          <li>
            Treatment of ENT diseases and removal of foreign bodies
          </li>
          <li>ENT Surgeries</li>
        </ul>
      </div>
    </div>
  );
};

export default HMOInfoCard;
