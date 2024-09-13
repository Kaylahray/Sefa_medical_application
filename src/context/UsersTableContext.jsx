import { createContext, useEffect, useState } from "react";

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPeople = async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/AbdulSnk/dataset-repo/main/MOCK_DATA.json"
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    setPeople(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <UsersContext.Provider value={{ people, loading }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
