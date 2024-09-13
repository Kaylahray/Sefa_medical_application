import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/AuthContext";
import { UsersProvider } from "./context/UsersTableContext";
import UsersTable from "./Components/Content/users/UsersTable";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <UsersProvider>
        <Router>
          <App />
        </Router>
      </UsersProvider>
    </UserProvider>
  </React.StrictMode>
);
