import React, { createContext, useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router";
import userReducer, { initialState } from "./store/userReducer";

const UsersContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const hasFetched = React.useRef(false);
  const {
    loading,
    people,
    searchQuery,
    filteredPeople,
    currentPage,
    itemsPerPage,
    editMode,
  } = state;

  const fetchPeople = async () => {
    try {
      const res = await fetch(
        "https://my.api.mockaroo.com/medical.json?key=d050a920"
      );
      const info = await res.json();
      console.log(info);
      dispatch({ type: "SET_PEOPLE", payload: info });
    } catch (err) {
      console.log("error fetching data", err);
    } finally {
      dispatch({ type: "END_LOADING" });
    }
  };
  // https://portabledd.github.io/medical/db.json http://localhost:8000/medical
  // https://my.api.mockaroo.com/medical.json?key=d050a920
  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      fetchPeople();
    }
  }, []);

  // my search logic: search across all `people`
  useEffect(() => {
    const lowercasedSearchTerm = searchQuery.toLowerCase();
    const filtered = people.filter((item) => {
      const patientName = `${item.patients?.firstName || ""} ${
        item.patients?.lastName || ""
      }`.toLowerCase();
      const patientEmail = (item.patients?.email || "").toLowerCase();
      const staffName = `${item.staff?.firstName || ""} ${
        item.staff?.lastName || ""
      }`.toLowerCase();
      const staffEmail = (item.staff?.email || "").toLowerCase();
      const adminName = `${item.admin?.firstName || ""} ${
        item.staff?.lastName || ""
      }`.toLowerCase();
      const adminEmail = (item.admin?.email || "").toLowerCase();
      const labName = (item.lab?.name || "").toLowerCase();

      return (
        patientName.includes(lowercasedSearchTerm) ||
        patientEmail.includes(lowercasedSearchTerm) ||
        staffName.includes(lowercasedSearchTerm) ||
        staffEmail.includes(lowercasedSearchTerm) ||
        adminName.includes(lowercasedSearchTerm) ||
        adminEmail.includes(lowercasedSearchTerm) ||
        labName.includes(lowercasedSearchTerm)
      );
    });

    dispatch({ type: "SET_FILTERED", payload: filtered });
  }, [searchQuery, people]);

  // my edit version
  const handleEditChange = (e, index) => {
    const updatedPerson = { ...filteredPeople[index] };
    if (e.target.name === "fullName") {
      const [firstName, lastName] = e.target.value.split(" ");
      updatedPerson.admin.firstName = firstName;
      updatedPerson.admin.lastName = lastName;
    } else {
      updatedPerson.admin[e.target.name] = e.target.value;
    }
    dispatch({
      type: "UPDATE_PERSON",
      payload: { index, updatedPerson },
    });
  };
  const toggleEditMode = () => {
    dispatch(editMode ? { type: "SET_VIEW_MODE" } : { type: "SET_EDIT_MODE" });
  };

  // pagination logic applied to filteredPeople
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPeople.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) =>
    dispatch({ type: "SET_CURRENT", payload: pageNumber });

  // some functions

  const handleClick = () => {
    const menu = document.getElementById("moreMenu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };

  const totalHMOIncome = people.reduce((acc, item) => {
    return (acc += item.HMO.totalAmountPaid);
  }, 0);

  const totalHMOPending = people.reduce((acc, items) => {
    return (acc += items.HMO.pending);
  }, 0);

  const patientsIncome = people.reduce((acc, item) => {
    return (acc += item.patients.totalPaid);
  }, 0);

  const patientsHMOCovered = people.reduce((acc, item) => {
    return (acc += item.patients.coveredHMO);
  }, 0);

  const totalLabsIncome = people.reduce((acc, items) => {
    return (acc += items.lab.amount);
  }, 0);

  const totalPatientsPending = people.reduce((acc, items) => {
    return (acc += items.patients.pending);
  }, 0);

  const totalIncome = people.reduce((acc, items) => {
    return (acc += items.pharmacy.income);
  }, 0);

  const handleSearch = (searchTerm) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: searchTerm });
    dispatch({ type: "SET_CURRENT", payload: 1 });
  };

  // use useLocation to solve the search and pagination behaviour

  const location = useLocation();

  useEffect(() => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: "" });
    dispatch({ type: "SET_CURRENT", payload: 1 });
  }, [location.pathname]);

  const contextValue = {
    people,
    currentItems,
    filteredPeople,
    loading,
    currentPage,
    itemsPerPage,
    totalItems: filteredPeople.length,
    paginate,
    handleClick,
    totalHMOIncome,
    totalHMOPending,
    patientsIncome,
    patientsHMOCovered,
    totalLabsIncome,
    totalPatientsPending,
    totalIncome,
    handleSearch,
    searchQuery,
    editMode,
    toggleEditMode,
    handleEditChange,
  };

  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
