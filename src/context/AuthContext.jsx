import { createContext, useEffect, useState } from "react";

const UsersContext = createContext();

export const UserProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading]= useState(true);
  const hasFetched = React.useRef(false);

  const fetchPeople = async () => {
    const res = await fetch("https://my.api.mockaroo.com/medical.json?key=d050a920");
    const info = await res.json();
    console.log(info);
    setPeople(info);
    setLoading(false)
  };
  // https://dummyjson.com/users https://my.api.mockaroo.com/medical.json?key=d050a920
  useEffect(() => {
    if (!hasFetched.current){
      hasFetched.current = true;
      fetchPeople();
    }
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
