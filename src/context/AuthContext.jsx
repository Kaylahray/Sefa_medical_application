import { createContext, useEffect, useState } from "react";

const UsersContext = createContext();

export const UserProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading]= useState(true)

  const fetchPeople = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const info = await res.json();
    console.log(info);
    setPeople(info.users);
    setLoading(false)
  };
  useEffect(() => {
    fetchPeople();
  }, []);

  const contextValue = {
    people,
    loading
  };
  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
