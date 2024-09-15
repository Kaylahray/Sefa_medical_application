import React, { createContext, useEffect, useState } from "react";

const UsersContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const hasFetched = React.useRef(false);

  const fetchPeople = async () => {
    const res = await fetch(
      "https://my.api.mockaroo.com/medical.json?key=d050a920"
    );
    const info = await res.json();
    console.log(info);
    setPeople(info);
    setLoading(false);
  };

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      fetchPeople();
    }
  }, []);

  // Search logic: search across all `people`
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

      return (
        patientName.includes(lowercasedSearchTerm) ||
        patientEmail.includes(lowercasedSearchTerm) ||
        staffName.includes(lowercasedSearchTerm) ||
        staffEmail.includes(lowercasedSearchTerm)
      );
    });

    setFilteredPeople(filtered);
  }, [searchQuery, people]);

  // Pagination logic applied to filteredPeople
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPeople.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (searchTerm) => {
    setSearchQuery(searchTerm);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const contextValue = {
    people,
    currentItems, // Display the current page items
    filteredPeople, // All filtered items
    loading,
    currentPage,
    itemsPerPage,
    totalItems: filteredPeople.length, // Use the filtered items length for pagination
    paginate,
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
