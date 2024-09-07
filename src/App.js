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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Child routes */}
          <Route index element={<OverviewPage />} />{" "}
          {/* Default route */}
          <Route path="patient" element={<Patient />} />
          <Route path="staff" element={<Staff />} />
          <Route path="finance" element={<Finance />} />
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
