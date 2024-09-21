export const navigation = [
  { name: "Overview", path: "/" },
  {
    name: "Patient",
    path: "/patient",
    subLinks: [
      { name: "All Patients", path: "/patient/all" },
      { name: "Appointments", path: "/patient/appointment" },
    ],
  },
  { name: "Staff", path: "/staff" },
  {
    name: "Finance",
    path: "/finance",
    subLinks: [
      { name: "Patients Report", path: "/finance/patients-report" },
      { name: "HMO Settlement", path: "/finance/hmo-settlement" },
      { name: "Pharmacy Report", path: "/finance/pharmacy-report" },
      { name: "Lab Report", path: "/finance/lab-report" },
    ],
  },
  { name: "Pharmacy", path: "/pharmacy" },
  { name: "Analytics", path: "/analytics" },
  { name: "Labs", path: "/labs" },
  { name: "Users", path: "/users" },
];
