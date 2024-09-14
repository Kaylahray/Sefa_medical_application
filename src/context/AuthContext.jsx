import React, { createContext, useEffect, useState } from "react";

const UsersContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const [paginationState, setPaginationState] = useState({
    lab: 1,
    pharmacy: 1,
  });

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
  // https://dummyjson.com/users https://my.api.mockaroo.com/medical.json?key=d050a920
  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      fetchPeople();
    }
  }, []);

  // my pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = people.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const contextValue = {
    people,
    currentItems,
    loading,
    currentPage,
    itemsPerPage,
    totalItems: people.length,
    paginate,
  };
  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
