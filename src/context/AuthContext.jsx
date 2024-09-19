import React, { createContext, useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router";

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_PEOPLE":
      return {
        ...state,
        loading: false,
        people: action.payload,
      };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_FILTERED":
      return { ...state, filteredPeople: action.payload };
    case "SET_CURRENT":
      return { ...state, currentPage: action.payload };
    case "END_LOADING":
      return { ...state, loading: false };
    default:
      return state;
  }
};

const UsersContext = createContext();

const initialState = {
  loading: true,
  people: [],
  searchQuery: "",
  filteredPeople: [],
  currentPage: 1,
  itemsPerPage: 10,
};

export const UserProvider = ({ children }) => {
  // const [loading, setLoading] = useState(true);
  // const [people, setPeople] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [filteredPeople, setFilteredPeople] = useState([]);
  // const [paginationState, setPaginationState] = useState({
  //   lab: 1,
  //   pharmacy: 1,
  // });

  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage] = useState(10);

  const [state, dispatch] = useReducer(userReducer, initialState);
  const hasFetched = React.useRef(false);
  const {
    loading,
    people,
    searchQuery,
    filteredPeople,
    currentPage,
    itemsPerPage,
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
  };

  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
