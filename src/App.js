import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import {
  OverviewPage,
  Patient,
  Staff,
  Finance,
  Pharmacy,
  Analytics,
  Labs,
  Users,
} from "./pages"; // Import all components
import AllPatients from "./pages/patient/all_patients/AllPatients";
import Appointments from "./pages/patient/appointments/Appointments";
import PatientsReport from "./pages/finance/patients_report/PatientsReport";
import PharmacyReport from "./pages/finance/pharmacy_report/PharmacyReport";
import LabReport from "./pages/finance/lab_report/LabReport";
import StaffPayroll from "./pages/finance/staff_payroll/StaffPayroll";
import HMOSettlement from "./pages/finance/hmo/Hmo";
import EachPatientReport from "./pages/finance/patients_report/EachPatientReport";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Child routes */}
          <Route index element={<OverviewPage />} />{" "}
          {/* Default route */}
          <Route path="patient" element={<Patient />}>
            <Route path="all" element={<AllPatients />} />
            <Route path="appointment" element={<Appointments />} />
          </Route>
          <Route path="staff" element={<Staff />} />
          <Route path="finance" element={<Finance />}>
            {/* Nested sub-routes for finance */}
            <Route
              path="patients-report"
              element={<PatientsReport />}
            />
            <Route
              path="patients-report/:id"
              element={<EachPatientReport />}
            />
            <Route
              path="hmo-settlement"
              element={<HMOSettlement />}
            />
            <Route path="staff-payroll" element={<StaffPayroll />} />
            <Route
              path="pharmacy-report"
              element={<PharmacyReport />}
            />
            <Route
              path="pharmacy-report/:id"
              element={<EachPatientReport />}
            />

            <Route path="lab-report" element={<LabReport />} />
          </Route>
          <Route path="pharmacy" element={<Pharmacy />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="labs" element={<Labs />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
