const HMOInfoCard = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md border border-blue-200">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">
            HMO Name
          </h2>
          <p className="text-blue-600 font-medium">Reliance HMO</p>
        </div>
        <div className="flex items-center">
          <span className="text-blue-500 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </span>
          <span className="text-blue-500 text-sm">Update</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <h3 className="font-semibold text-gray-600">HMO Type</h3>
          <p>Private</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-600">HMO Tier</h3>
          <p>Premium Individual</p>
        </div>
      </div>
      <h3 className="font-semibold text-gray-700 mb-2 text-sm">
        Tax Benefits
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Primary/Secondary Dental Care</span>
          </li>
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              Out-Patient Care, General and Specialist Consultation
            </span>
          </li>
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              Minor, Intermediate, Major Surgeries and Procedures
            </span>
          </li>
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Admissions (Including Feeding)</span>
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>X-Rays, Laboratory & Diagnostic Tests</span>
          </li>
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              Physiotherapy Sessions (Up to Specified Limits)
            </span>
          </li>
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Health Screening at Designated Centres</span>
          </li>
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>NPI Immunizations</span>
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Health Screening at Designated Centres</span>
          </li>
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>NPI Immunizations</span>
          </li>
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              Antenatal care, Induction of labour & Normal delivery
            </span>
          </li>
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              Assisted delivery & Emergency or Medically indicated
              Elective Caesarean Section
            </span>
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Psychiatry Cover up to 6 Weeks</span>
          </li>
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              Advanced and Complex Investigations (including CT Scan,
              MRI Scan)
            </span>
          </li>
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              Treatment of ENT diseases and Removal of foreign bodies
            </span>
          </li>
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>ENT Surgeries</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HMOInfoCard;
