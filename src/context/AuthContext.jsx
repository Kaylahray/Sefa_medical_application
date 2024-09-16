import React, { createContext, useEffect, useState } from "react";

const UsersContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);
  // const [paginationState, setPaginationState] = useState({
  //   lab: 1,
  //   pharmacy: 1,
  // });

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const hasFetched = React.useRef(false);

  const fetchPeople = async () => {
    try {
      const res = await fetch(
        "https://my.api.mockaroo.com/medical.json?key=d050a920"
      );
      const info = await res.json();
      console.log(info);
      setPeople(info);
    } catch (err) {
      console.log("error fetching data", err);
    } finally {
      setLoading(false);
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

      return (
        patientName.includes(lowercasedSearchTerm) ||
        patientEmail.includes(lowercasedSearchTerm) ||
        staffName.includes(lowercasedSearchTerm) ||
        staffEmail.includes(lowercasedSearchTerm) ||
        adminName.includes(lowercasedSearchTerm) ||
        adminEmail.includes(lowercasedSearchTerm)
      );
    });

    setFilteredPeople(filtered);
  }, [searchQuery, people]);

  // pagination logic applied to filteredPeople
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPeople.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
    setSearchQuery(searchTerm);
    setCurrentPage(1);
  };

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
